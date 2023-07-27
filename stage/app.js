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
      scrollY + navbar.offsetHeight >= sect.offsetTop &&
      scrollY + navbar.offsetHeight <= sect.offsetTop + sect.offsetHeight
    ) {
      if (sect.classList.contains("bg-light")) {
        navbar.classList.add("nav-dark");
      } else {
        navbar.classList.remove("nav-dark");
      }
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
  "about-headding-h": "About Us",
  "about-headding-p": "What Monshed is and what it provides.",
  // -- card 1
  "card1-h": "Monshed Company",
  "card1-p":
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias ea officiis distinctio totam perferendis porro voluptas hic delectus suscipit.",
  "card1-span1": "Based In: Tanta, Egypt",
  "card1-span2": "Stablish Date: xx - xx - xxxx",
  "card1-span3": "Work Field: Social Media Services",
  // -- card 2
  "card2-h": "Zaid Osama",
  "card2-p":
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias ea officiis distinctio totam perferendis porro voluptas hic delectus suscipit.",
  "card2-span1": "Based In: Tanta, Egypt",
  "card2-span2": "Work Field: Digital Marketing",
  "card2-span3": "Work Experience: +x yr",
  // -- card 3
  "card3-h": "Monshed Company",
  "card3-p":
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias ea officiis distinctio totam perferendis porro voluptas hic delectus suscipit.",
  "card3-span1": "Based In: Tanta, Egypt",
  "card3-span2": "Stablish Date: xx - xx - xxxx",
  "card3-span3": "Work Field: Social Media Services",
  // Gallary
  "gallary-headding-h": "Gallary",
  "gallary-headding-p": "Some of our work",
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
