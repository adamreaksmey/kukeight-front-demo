$(document).ready(function () {
  displayText();
  $('[data-toggle="tooltip"]').tooltip();
  launchModal();
});

const displayText = () => {
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

function launchModal() {
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
  return;
}
