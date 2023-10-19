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

/* Service Section tab functionality */

const tabs = document.querySelectorAll(".sectionBtn");
const allSections = document.querySelectorAll(".section");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("activeBtn"));
    tab.classList.add("activeBtn");

    allSections.forEach((section) => {
      section.classList.remove("active");
    });
    allSections[index].classList.add("active");
  });
});
