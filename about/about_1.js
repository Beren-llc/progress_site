"use strict";

//collapse effecting
//selecting all elements needed
const btnContainer = document.querySelector(".objectives__btn");
const allBtns = document.querySelectorAll(".link--btns");
const allContent = document.querySelectorAll(".tab--contents");
const contentContainer = document.querySelector(".objectives__content");

//adding event lister to buttons using delegation
btnContainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("link--btns")) {
    const clicked = e.target;
    //removing active tabs
    allBtns.forEach((btn) => btn.classList.remove("objectives__btn-active"));
    //adding active tabs to clicked button
    clicked.classList.add("objectives__btn-active");
    //hiding all contents
    allContent.forEach((tab) => tab.classList.add("objectives__hidden"));
    //rendering the contents matching clicked button
    document
      .querySelector(`.objectives--${clicked.dataset.tab}`)
      .classList.remove("objectives__hidden");
  }
});
