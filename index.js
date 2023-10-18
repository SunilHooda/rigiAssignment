const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  //Showing drop-down menu
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");

  //Changing Hamburger into cross
  document.querySelector("#bar1").classList.toggle("bar1");
  document.querySelector("#bar2").classList.toggle("bar2");
  document.querySelector("#bar3").classList.toggle("bar3");
});
