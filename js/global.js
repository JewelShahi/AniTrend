const goUpButton = document.getElementById("goUpBtn");

goUpButton.style.display = "none";

window.onscroll = function () {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    goUpButton.style.display = "block";
  } else {
    goUpButton.style.display = "none";
  }
};

goUpButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
