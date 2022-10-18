/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//making an array of the sections
let theSections = Array.from(document.querySelectorAll("section"));
//storing the id of navbar__list in a variable
let theNavMenu = document.querySelector("#navbar__list");
//storing the id of navbar__mobile__list in a variable
let theNavMobileMenu = document.querySelector("#navbar__mobile__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createNavBarSections() {
  //making a loop of the items in theSections array
  for (let i = 0; i < theSections.length; i++) {
    //create each section in a list
    theListSections = document.createElement("li");
    theMobileListSections = document.createElement("li");
    //Add HTML to each section in the list
    theListSections.innerHTML = `<a class="menu__link" href="#${theSections[i].id}" data-nav="${theSections[i].id}">${theSections[i].dataset.nav}</a>`;
    theMobileListSections.innerHTML = `<a class="menu__link" href="#${theSections[i].id}" data-nav="${theSections[i].id}">${theSections[i].dataset.nav}</a>`;
    theNavMenu.appendChild(theListSections);
    theNavMobileMenu.appendChild(theMobileListSections);
  }
}
createNavBarSections();

// Making the viewed section in the viewport have the active state
window.onscroll = function () {
  //making an array of the sections but in the function scope
  let theSections = Array.from(document.querySelectorAll("section"));
  //making an array of the navbar list
  let navMenuArray = Array.from(document.querySelectorAll("li"));

  /*
  making a loop and an if condition that will check the position of the section on scrolling and if the section is in the viewport the 
  function then will add the class "your-active-class" to the section and the class "active-link" to the navbar list items and otherwise the 
  function will remove it.
  */
  for (let i = 0; i < theSections.length; i++) {
    if (
      theSections[i].getBoundingClientRect().top >= -400 &&
      theSections[i].getBoundingClientRect().top <= 150
    ) {
      theSections[i].classList.add("your-active-class");
      navMenuArray[i].querySelector("a").classList.add("active-link");
    } else {
      theSections[i].classList.remove("your-active-class");
      navMenuArray[i].querySelector("a").classList.remove("active-link");
    }
  }
};

//Making a smooth scrolling to the corresponding section when any section of the navbar is clicked
theNavMenu.addEventListener("click", function (toSection) {
  //preventing the defualt clicking function
  toSection.preventDefault();
  //using the event delegation to target only the clicked section
  if (toSection.target.dataset.nav) {
    document
      .querySelector(`#${toSection.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});
theNavMobileMenu.addEventListener("click", function (toSection) {
  //preventing the defualt clicking function
  toSection.preventDefault();
  //using the event delegation to target only the clicked section
  if (toSection.target.dataset.nav) {
    document
      .querySelector(`#${toSection.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
