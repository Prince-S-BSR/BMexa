(function () {
  "use strict";

  /**
   * Point this at your email-capture endpoint (Formspree, Mailchimp signup
   * form action, a Google Sheets webhook, etc.) — see README.md for setup.
   * Left empty, submissions are stored locally so you can demo the flow
   * before a backend is wired up.
   */
  var WAITLIST_ENDPOINT = "https://formspree.io/f/xppzkzra";

  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setNote(form, text, state) {
    var note = form.parentElement.querySelector('[data-role="note"]');
    if (!note) return;
    if (!note.dataset.defaultText) {
      note.dataset.defaultText = note.textContent;
    }
    note.textContent = text || note.dataset.defaultText;
    note.classList.remove("is-success", "is-error");
    if (state) note.classList.add(state);
  }

  function saveLocally(email, source) {
    try {
      var key = "bmexa_waitlist";
      var existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ email: email, source: source, ts: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      /* localStorage unavailable — no-op */
    }
  }

  function handleSubmit(form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var input = form.querySelector(".email-input");
      var button = form.querySelector(".btn-primary");
      var email = input.value.trim();
      var source = form.getAttribute("data-form") || "unknown";

      if (!EMAIL_PATTERN.test(email)) {
        input.classList.add("input-error");
        setNote(form, "Please enter a valid work email address.", "is-error");
        input.focus();
        return;
      }

      input.classList.remove("input-error");
      button.disabled = true;
      var originalLabel = button.querySelector(".btn-label").textContent;
      button.querySelector(".btn-label").textContent = "Joining...";

      var finish = function (success) {
        button.disabled = false;
        button.querySelector(".btn-label").textContent = originalLabel;
        if (success) {
          form.reset();
          setNote(form, "You're on the list! We'll be in touch soon.", "is-success");
        } else {
          setNote(form, "Something went wrong. Please try again.", "is-error");
        }
      };

      if (!WAITLIST_ENDPOINT) {
        saveLocally(email, source);
        setTimeout(function () {
          finish(true);
        }, 500);
        return;
      }

      var formData = new FormData();
      formData.append("email", email);
      formData.append("source", source);

      fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
        .then(function (response) {
          finish(response.ok);
        })
        .catch(function () {
          finish(false);
        });
    });
  }

  document.querySelectorAll(".waitlist-form").forEach(handleSubmit);

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
