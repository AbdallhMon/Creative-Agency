let menu = document.querySelector(".menu");
let closeEle = document.querySelector(".close");
let ul = document.querySelector(".landing-page nav ul");
menu.addEventListener("click", function () {
  ul.classList.remove("remove");
  ul.classList.add("show");
  closeEle.classList.remove("remove-menu");
  menu.classList.add("remove-menu");
});
closeEle.addEventListener("click", function () {
  ul.classList.add("remove");
  ul.classList.remove("show");
  menu.classList.remove("remove-menu");
  closeEle.classList.add("remove-menu");
});
