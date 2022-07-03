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

// build the nav
const menu = document.getElementById("navbar-list");
const sections = [...document.querySelectorAll(".section")];

const nav_menu_items = () => {
  let nav_container = "";

  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionAtrribute = section.dataset.nav;
    nav_container += `<li> <a class="navbar-menu" href="#${sectionID}">${sectionAtrribute}</a></li>`;
  });
  menu.innerHTML = nav_container;
};
nav_menu_items();

// create active btn on nav list
const a = document.querySelectorAll(".navbar-menu a");
for (let i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function () {
    let b = document.querySelector(".navbar-menu .activeBtn");
    if (b) b.classList.remove("activeBtn");
    this.parentNode.classList.add("activeBtn");
  };
}

// Add class 'active' to section when near top of viewport
const viewportValue = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};
// Remove active class from previous section
const removeClass = (section) => {
  section.classList.remove("active");
};

// Add active class to section in view
const addClass = (inView, section) => {
  if (inView) {
    section.classList.add("active");
  }
};

const activate = () => {
  sections.forEach((section) => {
    const element = viewportValue(section);
    inviewport = () => element <= 300 && element >= 300;
  });
  removeClass(section);
  addClass(inviewport().section);
};

// Scroll to anchor ID using scrollTO event
var topBtn = document.getElementById("topBtn");
// Show button when user scrolls down 50px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Scroll to top when button clicked
function topFunction() {
  //
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
