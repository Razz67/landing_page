const title = document.getElementById("title");
const navigationListGenerate = document.getElementById("navbar__list");
const sectionListGenerate = document.getElementsByTagName("section");
const debug_message = false;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavigationMenu() {
  var listItem = document.createElement("li");

  // build a li element for "Header"
  listItem.innerText = "Home";
  listItem.className = "navbar__list_item";

  // Add class 'active' to section when near top of viewport;
  listItem.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
  navigationListGenerate.appendChild(listItem);

  //build a li element for each section
  for (let item of sectionListGenerate) {
    listItem = document.createElement("li");
    listItem.className = "navbar__list_item";
    listItem.innerText = item.dataset.nav;
    // Scroll to anchor ID using scrollTO event
    listItem.addEventListener("click", function () {
      item.scrollIntoView({
        behavior: "smooth",
      });
    });
    navigationListGenerate.appendChild(listItem);
  }
}

function setActiveOnScroll() {
  let activeSection = sectionListGenerate[0];
  let hero_header = document.querySelector(".main__hero");
  let liList = document.querySelectorAll("li");

  window.addEventListener("scroll", function (event) {
    //check if we are scrolling in the header
    //make "home" active
    if (isElementInViewport(hero_header)) {
      if (debug_message) {
        console.wram(hero_header);
      }

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
      for (let item of sectionListGenerate) {
        if (isElementInViewport(item)) {
          activeSection = item;
          if (debug_message) {
            console.wram("Item => ", item);
          }
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
          if (debug_message) {
            console.log("liItem is: ", liItem);
          }
        } else {
          if (liItem.classList.contains("li_item_active")) {
            liItem.classList.remove("li_item_active");
          }
        }
      }
    }
  });
}

//check if the input element(el) is in the view port
// returns true or false
function isElementInViewport(el) {
  var element = el.getBoundingClientRect();
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
// Scroll to section on link click
buildNavigationMenu();

// Set sections as active
setActiveOnScroll();
