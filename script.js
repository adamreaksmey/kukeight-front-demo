// import "../"

$(document).ready(function () {
  slideshowText();
  launchModal();
  components();
  revealPassword();
});

const slideshowText = () => {
  const lines = $(".description .dis-inline");

  lines.slice(1).hide();
  let i = 0;

  function displayNextLine() {
    $(lines[i]).fadeOut(1000, function () {
      i = (i + 1) % lines.length;
      $(lines[i]).fadeIn(1000, function () {
        setTimeout(displayNextLine, 2000);
      });
    });
  }

  displayNextLine();
};

const launchModal = () => {
  $(".sign-up").on("click", function () {
    $(".sign-up-modal").modal("show");
  });

  $(".login").on("click", function () {
    $(".login-modal").modal("show");
  });

  $(".close").on("click", function () {
    $(".modal").modal("hide");
  });
  return;
};

// Components includes
const components = () => {
  // Footer
  $(".footer").load(`${window.location.href}components/footer.html`);
  $(".login-modal").load(`${window.location.href}components/login.html`);
  $(".sign-up-modal").load(`${window.location.href}components/signup.html`);
  $(".head").load(`${window.location.href}components/head.html`);
  return;
};

const revealPassword = () => {
  const passwordField = $(".login-password, .confirm-signup-password, .signup-password");
  const type = passwordField.attr("type");
  if (type === "password") {
    passwordField.attr("type", "text");
    $("#toggle-password i").removeClass("fa-eye").addClass("fa-eye-slash");
  } else {
    passwordField.attr("type", "password");
    $("#toggle-password i").removeClass("fa-eye-slash").addClass("fa-eye");
  }
};
