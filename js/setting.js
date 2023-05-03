// setting
let colors = document.querySelectorAll(".setting .colors ul li");

let colorsArr = Array.from(colors);

let set = document.querySelector(".setting");

let setButton = document.querySelector(".setting i");

let landingPage = document.querySelector(".landing-page");

let randomBackgroundImgSetting = document.querySelector(".random-background");

let randomBackgroundSpan = document.querySelectorAll(".random-background span");

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

let imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

//get from local
if (window.localStorage.getItem("backgroundImg") != null) {
  randomBackgroundSpan.forEach((e) => {
    e.classList.remove("active");

    let currentActive = document.querySelector(
      `.setting .random-background .${window.localStorage.getItem(
        "backgroundImg"
      )}`
    );
    currentActive.classList.add("active");
  });
}

if (randomBackgroundSpan[0].classList.contains("active")) {
  backgroundImageIntervel();
}

function backgroundImageIntervel() {
  let changingImg = window.setInterval(() => {
    //

    allowRandomBackground();

    //
  }, 5000);

  playAndStop(changingImg);
}
function allowRandomBackground() {
  //

  let randomnum = Math.floor(Math.random() * imgArr.length);

  //

  landingPage.style.backgroundImage =
    'url("../imgs/' + imgArr[randomnum] + '")';

  //

  //
}
playAndStop();
//stoping background intervel

function playAndStop(changingImg) {
  randomBackgroundSpan.forEach((ele) => {
    //

    ele.addEventListener("click", function (e) {
      randomBackgroundSpan.forEach((r) => {
        r.classList.remove("active");
      });

      if (e.target.classList.contains("yes")) {
        e.target.classList.add("active");
        backgroundImageIntervel();
      } else {
        e.target.classList.add("active");
        window.clearInterval(changingImg);
      }
      let playRandom = document.querySelector(
        ".setting .random-background .active"
      );

      window.localStorage.setItem("backgroundImg", playRandom.classList[0]);
    });

    //
  });
}
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
