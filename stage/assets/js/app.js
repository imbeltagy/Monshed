// Collapse Button Function
Array.from(document.getElementsByClassName("view-more")).forEach((btn) => {
  btn.onclick = () => {
    btn.parentElement.classList.toggle("collapsed");
  };
});

// Open Nav List In Small Screens
document.getElementById("nav-icon").onclick = function () {
  this.classList.toggle("opened");
  document.getElementById("nav-list").classList.toggle("opened");
};

// Change Nav Bar To Fixed While Scrolling
const navbar = document.querySelector(".navbar"),
  margintop = parseFloat(getComputedStyle(navbar).getPropertyValue("margin-top")),
  sections = Array.from(document.getElementsByTagName("section"));
window.addEventListener("scroll", () => {
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
});

// Switch Languages
const contents = {
  // Nav
  "nav-home": "Home",
  "nav-about": "About",
  "nav-testimonials": "Testimonials",
  "nav-implementations": "Implementations",
  // Main
  "main-welcome": "Hello, I'm Zaid, the founder of Monshed Company. We specialize in",
  "main-title": "Social Media and Digital Marketing Services",
  "main-bief": "We have a course that teaches you digital marketing from scratch",
  "main-link": "Book Now!",
  // About
  "about-headding-h": "About Us",
  "about-headding-p": "Zaid Osama, the founder of Munshed Company",
  // -- card 1
  "card1-h": "Zaid Osama",
  "card1-p1":
    "Hello, I'm Zaid Osama Azam, an electronic marketer based in Egypt. I have over 8 years of experience in management and marketing. I'm the founder of Manshad Company, where I have developed marketing strategies and achieved success in advertising campaigns and promoting products and services.",
  "card1-p2":
    "I have obtained training certificates in the field of marketing from recognized institutes in Saudi Arabia and Egypt, including Al-Qadisiyah Business Institute. I have kept myself updated and stayed current with the latest developments in digital marketing.",
  "card1-p3":
    "Currently, I work as an independent digital marketer and have executed successful campaigns for multiple clients. I possess the ability to analyze data and utilize it to identify marketing opportunities and enhance performance overall.",
  "card1-p4":
    "I'm delighted to assist you in achieving your marketing goals and improving your digital presence. Feel free to get in touch with me to discuss how I can help you achieve digital success.",
  "card1-contact-text": "Contact Link",
  // -- card 2
  "card2-h": "Monshed Company",
  "card2-p1":
    "Monshed Company is a leading player in the field of digital marketing and visual production, established in 2019. We strive to provide top-notch services in the realm of modern advertising and marketing. Despite not having a physical office currently, our aspirations and efforts know no bounds.",
  "card2-p2":
    "At Monshed, we are committed to keeping pace with technological advancements and the challenges of our times. This enables us to offer strategic marketing services for your products and services in innovative and engaging ways. Our experience includes collaboration with major companies and brands, equipping us with the expertise and knowledge necessary to meet your requirements efficiently and professionally.",
  "card2-p3":
    "We offer a wide range of services, including digital marketing across social media platforms, graphic design and promotional materials, and video production adhering to the highest standards of quality and innovation. Our team consists of qualified and professional experts in various fields, and we are confident in our ability to effectively achieve your marketing goals.",
  "card2-p4":
    "We prioritize delivering an exceptional customer experience and hold your satisfaction as our utmost priority. If you're in search of a reliable and creative partner to enhance your digital presence and achieve success, the Monshed Company team is ready to collaborate with you, working together to achieve remarkable results. Contact us now to kickstart our joint efforts toward exceptional success.",
  "card2-contact-text": "Facebook Page",
  // -- card 3
  "card3-h": "Digital Marketing Course",
  "card3-p1":
    "The Excellence in Marketing Training Course aims to enhance your skills in the world of digital marketing and achieve success in the realm of online business. Whether you're looking to increase your sales, improve your income, or build your own business from scratch, this course caters to your needs.",
  "card3-list-headding": "In this training course, you will learn:",
  "card3-li1": "The art of copywriting: How to effectively use words to attract and engage customers.",
  "card3-li2":
    "Creating a successful project from scratch: You will become acquainted with successful management strategies to ensure the success of your project.",
  "card3-li3":
    "The importance of design in marketing: How to use attractive design to capture customers' attention and enhance their experience.",
  "card3-li4":
    "Digital marketing: You will learn how to create effective advertisements on social media platforms like Facebook and Instagram, and target the right audience properly.",
  "card3-li5":
    "Obtaining a certified certificate: You will receive a certified certificate from Manshad Company that verifies your skills and knowledge in the field of digital marketing.",
  "card3-p2":
    "In our course, we prioritize engaging with participants and implementing practical activities after each lecture to enhance learning. We also provide technical support throughout the day to assist in resolving any inquiries.",
  "card3-contact-text": "Course Registration Link",
  // Testimonials
  "testimonials-headding-h": "Testimonials",
  "testimonials-headding-p": "What them sayed about us.",
  // Implementations
  "implementations-headding-h": "Students Implementations",
  "implementations-headding-p": "Some of our students implementations on Digital Marketing Course",
  lecture1: "The first lecture: advertising writing",
  lecture2: "The second lecture: planning a successful project",
  lecture3: "Third lecture: How to create a design",
  lecture4: "Fourth lecture: How to create a professional advertisement",
  // Last Interact
  "last-interact-text": "Don't forget to join our Digital Markteing course.",
  "last-interact-deal": "Special discount for the first ten trainees in each course.",
  "last-interact-btn": "Join Now",
  // Footer
  "footer-home": "Home",
  "footer-about": "About",
  "footer-testimonials": "Testimonials",
  "footer-implementations": "Implementations",
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
  // Resize Card on Testimonials
  testimonialsSlider.resizeSlides();
};
window.addEventListener("load", () => {
  dir = localStorage.getItem("dir") || html.dir;
  if (dir === "ltr") {
    toggleContent();
  }
});

// Apply Slider Components
class Slider {
  constructor(slider) {
    this.slider = slider;
    this.cardsContainer = slider.querySelector(".cards-container");
    this.cards = Array.from(this.cardsContainer.children);
    this.count;
    this.gap;
    this.containerWidth;
    this.cardWidth;
    (this.prevBtn = slider.querySelector(".slider-controls .prev")),
      (this.nextBtn = slider.querySelector(".slider-controls .next"));
    this.moves = 0;
  }

  resizeSlides = () => {
    this.count = parseInt(getComputedStyle(this.cardsContainer).getPropertyValue("--images-count"));
    this.gap = parseFloat(getComputedStyle(this.cardsContainer).getPropertyValue("gap"));
    this.containerWidth = parseFloat(getComputedStyle(this.cardsContainer).getPropertyValue("width"));

    this.cardWidth = (this.containerWidth - this.gap * (this.count - 1)) / this.count;

    // set width for cards
    this.cards.forEach((card) => {
      card.style.width = this.cardWidth + "px";
    });
    // reset value when changing content
    this.cardsContainer.style.height = null;
    // get the height of the heigher card
    let height =
      this.cards.reduce((acc, cur) => {
        let h = parseFloat(getComputedStyle(cur).getPropertyValue("height"));
        if (isNaN(acc)) {
          acc = parseFloat(getComputedStyle(acc).getPropertyValue("height"));
        }
        return h > acc ? h : acc;
      }) + "px";
    this.cardsContainer.style.height = height;
    // Move Images
    this.slide();
  };

  moveBack = () => {
    this.moves--;
    this.slide();
    this.nextBtn.classList.remove("disabled");
    if (this.moves <= 0) {
      this.prevBtn.classList.add("disabled");
    } else {
      this.prevBtn.classList.remove("disabled");
    }
  };

  moveForward = () => {
    this.moves++;
    this.slide();
    this.prevBtn.classList.remove("disabled");
    if (this.moves >= this.cards.length - this.count) {
      this.nextBtn.classList.add("disabled");
    } else {
      this.nextBtn.classList.remove("disabled");
    }
  };

  slide = () => {
    this.cards.forEach((card, i) => {
      card.style.setProperty("--space", (i - this.moves) * (this.cardWidth + this.gap) + "px");
      // stop controls till animation ends
      this.prevBtn.onclick = null;
      this.nextBtn.onclick = null;
      setTimeout(() => {
        this.prevBtn.onclick = this.moveBack;
        this.nextBtn.onclick = this.moveForward;
      }, 333);
    });
  };

  start = () => {
    this.resizeSlides();
    window.addEventListener("resize", this.resizeSlides);

    this.prevBtn.onclick = this.moveBack;
    this.nextBtn.onclick = this.moveForward;
  };
}

let testimonialsSlider = new Slider(document.querySelector("#testimonials .slider"));
window.addEventListener("load", testimonialsSlider.start);

// Apply Zoom on Implements Imgs
const showImg = document.getElementById("showImg");
showImg.querySelector(".close-btn").onclick = () => {
  showImg.style.display = "none";
};

let imgs = Array.from(document.querySelectorAll("#implementations .img-container"));
imgs.forEach((e) => {
  e.onclick = () => {
    // get img src
    let src = e.querySelector(".high-res").src;
    showImg.style.display = "grid";
    showImg.querySelector("img").src = src.replace("-md", "");
  };
});
