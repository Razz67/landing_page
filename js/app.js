/* Global Variables */
const navList = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");
/**
 * End Global Variables
 * Begin Main Functions * */

// build the nav
function buildNavigationMenu() {
  var listItem = document.createElement("li");

  // build a li element for "Header"
  listItem.innerText = "Home";
  listItem.className = "navbarItem";

  // Add class 'active' to section when near top of viewport;
  listItem.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
  navList.appendChild(listItem);

  //build a li element for each section
  for (let item of sections) {
    listItem = document.createElement("li");
    listItem.className = "navbarItem";
    listItem.innerText = item.dataset.nav;

    // Scroll to anchor ID using scrollIntoView event
    listItem.addEventListener("click", function () {
      item.scrollIntoView({
        behavior: "smooth",
      });
    });
    navList.appendChild(listItem);
  }
}

function setActive() {
  let activeSection = sections[0];
  let hero = document.querySelector(".main__hero");
  let liList = document.querySelectorAll("li");

  window.addEventListener("scroll", function (event) {
    if (isElementInViewport(hero)) {
      for (let liItem of liList) {
        if (liItem.innerText === "Home") {
          liItem.classList.add("li_item_active");
        } else {
          if (liItem.classList.contains("li_item_active")) {
            liItem.classList.remove("li_item_active");
          }
        }
      }
    } else {
      //Define the active section based on
      // the scrolling event
      for (let item of sections) {
        if (isElementInViewport(item)) {
          activeSection = item;
          item.classList.add("your-active-class");
        } else {
          if (item.classList.contains("your-active-class")) {
            item.classList.remove("your-active-class");
          }
        }
      }

      //Based on the active scetion
      //Select the appropiate link as active

      for (let liItem of liList) {
        if (liItem.innerText === activeSection.dataset.nav) {
          liItem.classList.add("li_item_active");
        } else {
          if (liItem.classList.contains("li_item_active")) {
            liItem.classList.remove("li_item_active");
          }
        }
      }
    }
  });
}

//check if the section is in the view port
function isElementInViewport(section) {
  var element = section.getBoundingClientRect();
  return (
    element.top >= 0 &&
    element.left >= 0 &&
    element.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    element.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavigationMenu();

// Set sections as active
setActive();
