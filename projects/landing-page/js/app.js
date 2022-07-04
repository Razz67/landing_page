// wait for the DOM content to be fully loaded before executing javaScript code

window.addEventListener("DOMContentLoaded", () => {
  // Global Variables
  const sections = document.getElementsByTagName("section");
  const navList = document.getElementById("navbar__list");
  const myButton = document.getElementById("myBtn");

  // ********* Adding the Nav bar sections **********
  for (const section of sections) {
    const menuItems = document.createElement("li");
    const navLinks = document.createElement("a");
    navLinks.textContent = section.dataset.nav;
    navLinks.classList.add("menu__link");
    navLinks.href = `#${section.id}`;
    menuItems.append(navLinks);
    navList.appendChild(menuItems);

    // ********** Add smooth scroll behavior **********
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

  // ***** This section control all the scrolling behaviour *****
  window.addEventListener("scroll", () => {
    for (const section of sections) {
      const activeSection = document.querySelectorAll(`#${section.id} h2`);
      for (h2 of activeSection) {
        const activeNav = document.querySelector(`[href="#${section.id}"]`);
        if (section.className === "your-active-class") {
          section.classList.remove("your-active-class");
          activeNav.classList.remove("navigation");
        }
        if (
          section.getBoundingClientRect().top >= 0 &&
          section.getBoundingClientRect().top < 300
        ) {
          section.classList.add("your-active-class");
          activeNav.classList.add("navigation");
        }
      }
    }
  });

  const scrollTop = function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&uarr;";
    scrollBtn.setAttribute("id", "scroll-btn");
    document.body.appendChild("scrollBtn");


const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.remove("show")
    : scrollBtn.classList.add("show");
};
window.addEventListener("scroll", scrollBtnDisplay);
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
});
