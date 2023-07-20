// import "../"

$(document).ready(async function () {
  await displayText();
  $('[data-toggle="tooltip"]').tooltip();
  launchModal();
  await components();
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
  $('.footer').load('../components/footer.html');
  $('.login-modal').load('../components/login.html');
  $('.sign-up-modal').load('../components/signup.html');
  $('.head').load('../components/head.html');
  return;
}
