// Wait for Dom to load before executing JS
document.addEventListener("DOMContentLoaded", () => {
  // Global Variables
  const sections = document.querySelectorAll("section");
  const head = document.querySelector(".page__header");
  const nav = document.querySelector(".navbar__menu");
  const navList = document.querySelector("#navbar__list");
  const footer = document.querySelector("footer");
  const dom = document.createDocumentFragment();

  // Create Navigation Bar
  for (const section of sections) {
    const navItems = document.createElement("li");
    const navLinks = document.createElement("a");
    navLinks.textContent = section.dataset.nav;
    navLinks.classList.add("menu__link");
    navLinks.href = `#${section.id}`;
    navItems.append(navLinks);
    navList.appendChild(navItems);
    dom.append(navList);

    // Initiate Smooth Scroll
    navLinks.addEventListener("click", (e) => {
      e.preventDefault();
      const activeSection = document.getElementById(
        e.target.getAttribute("href").substring(1)
      );
      activeSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  // Append the finished section to the Nav Bar.
  nav.appendChild(dom);

  // Add Active Class
  function sectionActive() {
    const activeNav = document.querySelectorAll(".menu__link");
    sections.forEach((section, i) => {
      const bounding = section.getBoundingClientRect();
      if (bounding.top <= 380 && bounding.bottom >= 350) {
        section.classList.add("your-active-class");
        activeNav[i].classList.add("activeBtn");
      } else {
        section.classList.remove("your-active-class");
        activeNav[i].classList.remove("activeBtn");
      }
    });
  }
  // Navigation disappears until scroll up
  /******** comment out toggleNav function invocation to disable ******* */
  function toggleNav() {
    let scrolling;
    head.style.cssText = "opacity: 1; transition: ease 0.3s";
    window.clearTimeout(scrolling);
    scrolling = setTimeout(function () {
      head.style.cssText = "opacity: 0; transition: ease 0.3s";
    }, 3000);
  }

  window.addEventListener("scroll", (event) => {
    event.preventDefault();
    sectionActive();
    // toggleNav();
  });

  // To Top Arrow
  const upBtn = footer.insertAdjacentHTML(
    "beforebegin",
    '<div id="goTop" ></div>'
  );
  document.getElementById("goTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
