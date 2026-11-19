/* =========================================================
   Free Website Review — Anastasia A.O
   Page behaviour: smooth links to the form, pinboard
   entrance animation and the booking form submission.
   ========================================================= */
(function () {
  "use strict";

  var FORM_ENDPOINT = "https://formsubmit.co/ajax/uiuxanastasiadesigns@gmail.com";

  var form = document.getElementById("booking-form");
  var success = document.getElementById("booking-success");
  var submitBtn = document.getElementById("submit-btn");
  var submitLabel = document.getElementById("submit-label");
  var errorMsg = document.getElementById("form-error");
  var againBtn = document.getElementById("send-again");
  var nameField = document.getElementById("name");
  var focusTimer;

  /* Every "book" link scrolls to the form and puts the cursor in the first field. */
  function goToForm(event) {
    if (event) event.preventDefault();
    if (form.hidden) showForm();
    var target = document.getElementById("book");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    clearTimeout(focusTimer);
    focusTimer = setTimeout(function () { nameField.focus({ preventScroll: true }); }, reduce ? 0 : 700);
    if (history.replaceState) history.replaceState(null, "", "#book");
  }
  document.querySelectorAll("[data-book]").forEach(function (link) {
    link.addEventListener("click", goToForm);
  });

  /* Pinboard: hide its pieces, then play the entrance once it scrolls into view. */
  var board = document.querySelector(".board");
  if (board && "IntersectionObserver" in window) {
    board.classList.add("armed");
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        board.classList.add("play");
        io.disconnect();
      }
    }, { threshold: 0.2 });
    io.observe(board);
  }

  /* Booking form */
  function showForm() {
    success.hidden = true;
    form.hidden = false;
  }
  function setSending(isSending) {
    submitBtn.disabled = isSending;
    submitLabel.textContent = isSending ? "Sending…" : "Book my free review";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMsg.hidden = true;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSending(true);
    var data = new FormData(form);
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Request failed");
        form.reset();
        form.hidden = true;
        success.hidden = false;
        success.querySelector("h3").focus();
      })
      .catch(function () {
        errorMsg.hidden = false;
      })
      .then(function () {
        setSending(false);
      });
  });

  againBtn.addEventListener("click", function () {
    showForm();
    nameField.focus();
  });

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
