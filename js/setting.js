// setting
let colors = document.querySelectorAll(".setting .colors ul li");

let colorsArr = Array.from(colors);

let set = document.querySelector(".setting");

let setButton = document.querySelector(".setting i");

let randomBackgroundImgSetting = document.querySelector(".random-background");

let randomBackEl = document.querySelectorAll(".random-background span");

let showBulletsSpan = document.querySelectorAll(".show-bullets span");

let showBullets = document.querySelector(".bullets");

setButton.addEventListener("click", function () {
  set.classList.toggle("toggled");
  setButton.classList.toggle("clicked");
});

//start of colors switch
if (window.localStorage.getItem("main-color") != null) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("main-color")
  );
  colorsArr.forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.color == window.localStorage.getItem("main-color")) {
      e.classList.add("active");
    }
  });
}

colorsArr.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    colorsArr.forEach((s) => {
      s.classList.remove("active");
    });
    e.target.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // saving it in localStorage

    window.localStorage.setItem("main-color", e.target.dataset.color);
  });
});

//changing background-img
// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {
  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}
// Loop On All Spans
randomBackEl.forEach((span) => {
  // Click On Every Span
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 6000);
  }
}

randomizeImgs();

//show Bullets and hied them

// getFromLocal

if (window.localStorage.getItem("show-bullets") != null) {
  showBulletsSpan.forEach((e) => {
    e.classList.remove("active");

    let currentActive = document.querySelector(
      `.setting .show-bullets .${window.localStorage.getItem("show-bullets")}`
    );
    currentActive.classList.add("active");
  });
}

if (showBulletsSpan[0].classList.contains("active")) {
  showBulletsUL();
} else {
  hideBulletUL();
}

function showBulletsUL() {
  showBullets.classList.remove("hide");
}

function hideBulletUL() {
  showBullets.classList.add("hide");
}
switchingBullets();

function switchingBullets() {
  showBulletsSpan.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      showBulletsSpan.forEach((s) => {
        s.classList.remove("active");
      });

      if (e.target.classList.contains("yes")) {
        e.target.classList.add("active");

        showBulletsUL();
      } else {
        e.target.classList.add("active");

        hideBulletUL();
      }

      let showInlocal = document.querySelector(
        ".setting .show-bullets .active"
      );

      window.localStorage.setItem("show-bullets", showInlocal.classList[0]);
    });
  });
}
// end of setting
