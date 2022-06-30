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
const menu = document.getElementById("navbar__list");
const sections = [...document.querySelectorAll(".section")];

const nav_menu_items = () => {
  let nav_container = "";

  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionAtrribute = section.dataset.nav;
    nav_container += `<li> <a class="navbar__menu active" href="#${sectionID}">${sectionAtrribute}</a></li>`;
  });
  menu.innerHTML = nav_container;
};
nav_menu_items();

// Add active class to nav bar buttons

let active_btn = document.querySelectorAll(".navbar__list a");
for (let i = 0, length = active_btn.length; i < length; i++) {
    active_btn[i].onclick = function() {
        const b = document.querySelector(".navbar__list li.active");
        if (b) b.classList.remove("active");
        this.parentNode.classList.add("active");
    };
}

// Add class 'active' to section when near top of viewport



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
