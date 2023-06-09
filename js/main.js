//scroll to a section bullets

let navLi = document.querySelectorAll(".landing-page nav ul a");

let navLiArr = Array.from(navLi);

scrollToSection(navLiArr);

let bulletLi = document.querySelectorAll(".bullets li");

let bulletLiArr = Array.from(bulletLi);

scrollToSection(bulletLiArr);

function scrollToSection(lis) {
  lis.forEach((li) => {
    li.addEventListener("click", function (e) {
      let selectedSection = document.querySelector(
        `.${e.target.dataset.section}`
      );
      
      window.scrollTo({
        top: selectedSection.offsetTop,

        behavior: "smooth",
      });
    });
  });
}
//end of scrollTo a section
//start of about animation
let about = document.querySelector(".about");

let aboutText = document.querySelector(".about .about-text");

let aboutImg = document.querySelector(".about img");

window.addEventListener("scroll", function () {
  if (window.scrollY >= about.clientHeight - 100) {
    aboutText.classList.add("shown");
    aboutImg.classList.add("shown");
  } 
  if (window.scrollY >= about.clientHeight - 200) {
    aboutText.classList.add("shownmob");
    aboutImg.classList.add("shownmob");
  } 
});
//end of about animation
// start ourskills

let skills = document.querySelector(".skills");

let article = document.querySelectorAll(".skills article");
window.addEventListener("scroll", function () {
  if (window.scrollY >= skills.offsetTop - (skills.clientHeight - 100)) {
    article.forEach((arti) => {
      arti.style.width = `${arti.dataset.reach}`;
    });
  } else if (this.scrollY < skills.offsetTop - (skills.clientHeight + 400)) {
    article.forEach((arti) => {
      arti.style.width = "0";
    });
  }
});
//end of skills
// gallery
let galleryImgs = document.querySelectorAll(".gallery img");

let galleryImgsArr = Array.from(galleryImgs);

// start of our imgs

galleryImgsArr.forEach((img) => {
  img.addEventListener("click", function (i) {
    let popUp = document.createElement("div");
    popUp.classList.add("pop-up");

    let button = document.createElement("span");
    button.innerHTML = "X";
    popUp.appendChild(button);

    let p = document.createElement("p");

    p.innerHTML = i.target.getAttribute("alt");

    popUp.appendChild(p);

    let copyimg = i.target.cloneNode(true);

    popUp.appendChild(copyimg);

    let overLay = document.createElement("div");
    overLay.classList.add("popup-overlay");
    document.body.prepend(overLay);
    document.body.prepend(popUp);
    let popUpSpan = document.querySelector(".pop-up span");
    let overLaypo = document.querySelector(".popup-overlay");

    popUpSpan.addEventListener("click", function () {
      overLaypo.remove();
      popUpSpan.parentElement.remove();
    });
  });
});

// timeline section

let timeline = document.querySelector(".timeline");

let timelineSpans = document.querySelectorAll(".timeline span");

let timelineSpansArr = Array.from(timelineSpans);

let timelineDivs = document.querySelectorAll(".timeline .time div");

let timelineDivsArr = Array.from(timelineDivs);

window.addEventListener("scroll", function () {
  if (window.scrollY >= timeline.offsetTop - 200) {
    timelineSpansArr.forEach((span) => {
      span.classList.add("active");
    });
    timelineDivsArr.forEach((div) => {
      div.classList.add("reached");
      div.classList.add("active");
    });
  } 
});
// feature

let feature = document.querySelector(".features");

let featureDivs = document.querySelectorAll(".features .feature-box");

let featureDivsArr = Array.from(featureDivs);
window.addEventListener("scroll", function () {
  if (window.scrollY >= feature.offsetTop - 200) {
    featureDivsArr.forEach((div) => {
      div.classList.add("active");
    });
  } 
});
// ts
let ts = document.querySelector(".testimonials");

let tsDivs = document.querySelectorAll(".testimonials .ts-box");

let tsDivsArr = Array.from(tsDivs);
window.addEventListener("scroll", function () {
  if (window.scrollY >= ts.offsetTop - 200) {
    tsDivsArr.forEach((div) => {
      div.classList.add("translate-z");
      document.querySelector(".testimonials h2").classList.add("opacity");
    });
  } 
});

// scroll to top button

let goUp = document.querySelector(".go-up");

window.onscroll = function () {
  if (window.scrollY >= timeline.offsetTop) {
    goUp.classList.add("pop");
  } else {
    goUp.classList.remove("pop");
  }
};
goUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// loader
let loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
