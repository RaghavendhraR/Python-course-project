/* global document */
var Image = document.querySelector("img");
Image.onclick = function () {
  var myImages = Image.getAttribute("src");
  if (myImages === "../brucelee.jpg")
    Image.setAttribute("src", "../jackie.jpg");
  else Image.setAttribute("src", "../brucelee.jpg");
};

var nameButton = document.querySelector("button");
var nameHeading = document.querySelector("h2");
function setUserName() {
  "use strict";
  var myName = window.prompt("please enter your name.");
  localStorage.setItem("name", myName);
  nameHeading.textContent = "TODAY IS A NEW DAY," + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  nameHeading.textContent = "TODAY IS A NEW DAY," + storedName;
}
nameButton.onclick = function () {
  "use strict";
  setUserName();
};
