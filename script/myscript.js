/* global document */
var Image = document.querySelector("img");
Image.onclick = function () {
  var myImages = Image.getAttribute("src");
  if (myImages === "../brucelee.jpg")
    Image.setAttribute("src", "../jackie.jpg");
  else Image.setAttribute("src", "../brucelee.jpg");
};
