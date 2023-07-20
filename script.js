// import "../"

$(document).ready(function () {
  slideshowText();
  launchModal();
  components();
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

  $(".sign-up-form").submit(function (event) {
    event.preventDefault();
    alert("Thank q for trying out our demo hehe.");
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
