// Open Nav List In Small Screens
document.getElementById("nav-icon").onclick = function () {
  this.classList.toggle("opened");
  document.getElementById("nav-list").classList.toggle("opened");
};

// Switch Languages
const contents = {
  "nav-home": "Home",
  "nav-about": "About",
  "nav-services": "Services",
  "nav-contact": "Contact",
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
