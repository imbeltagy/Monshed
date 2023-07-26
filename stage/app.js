// Open Nav List In Small Screens
document.getElementById("nav-icon").onclick = function () {
  this.classList.toggle("opened");
  document.getElementById("nav-list").classList.toggle("opened");
};

// Change Nav Bar To Fixed While Scrolling
const navbar = document.querySelector(".navbar"),
  margintop = parseFloat(getComputedStyle(navbar).getPropertyValue("margin-top")),
  sections = Array.from(document.getElementsByTagName("section"));
window.onscroll = () => {
  if (scrollY >= margintop) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
  sections.forEach((sect) => {
    if (
      sect.classList.contains("bg-light") &&
      scrollY + navbar.offsetHeight >= sect.offsetTop &&
      scrollY + navbar.offsetHeight <= sect.offsetTop + sect.offsetHeight
    ) {
      navbar.classList.add("nav-dark");
    } else {
      navbar.classList.remove("nav-dark");
    }
  });
};

// Switch Languages
const contents = {
  // Nav
  "nav-home": "Home",
  "nav-about": "About",
  "nav-services": "Services",
  "nav-contact": "Contact",
  // Main
  "main-welcome": "Hello, we are Monshed Company. We specialize in",
  "main-title": "Social Media and Digital Marketing Services",
  "main-bief": "We have a course that teaches you digital marketing from scratch",
  "main-link": "Book Now!",
  // About
  "about-title-h": "About Us",
  "about-title-p": "What Monshed is and what it provides.",
};

const html = document.getElementsByTagName("html")[0],
  switcher = document.getElementById("lang-switcher"),
  switcherImg = switcher.firstElementChild;

let dir = html.dir;

function toggleContent() {
  // Change HTML Attributes
  if (dir === "rtl") {
    html.lang = "ar";
  } else {
    html.lang = "en";
  }
  html.dir = dir;

  // Change Language Flag
  [switcherImg.src, switcherImg.dataset.alt] = [switcherImg.dataset.alt, switcherImg.src];

  // Change Text Content
  Array.from(document.querySelectorAll("[data-name]")).forEach((element) => {
    [contents[element.dataset.name], element.textContent] = [element.textContent, contents[element.dataset.name]];
  });
}

switcher.onclick = () => {
  if (dir === "rtl") {
    dir = "ltr";
  } else {
    dir = "rtl";
  }
  localStorage.setItem("dir", dir);
  toggleContent();
};
window.onload = () => {
  dir = localStorage.getItem("dir") || html.dir;
  if (dir === "ltr") {
    toggleContent();
  }
};
