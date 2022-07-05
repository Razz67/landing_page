// wait for the DOM content to be fully loaded before executing javaScript code

window.addEventListener("DOMContentLoaded", () => {
  // Global Variables
  const sections = document.getElementsByTagName("section");
  const navList = document.getElementById("navbar__list");
  const myButton = document.getElementById("topBtn");

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

  // ***** Add Active Class *****
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
  // ********** Show button when window is scrolled down 100px **********
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement > 150) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }

  // ********** On button click, scroll to top of document *********
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
