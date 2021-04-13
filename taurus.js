const url = window.location.href;

var divs = document.getElementsByTagName("div");
// var divs = document.querySelectorAll("div");
console.log("right after ", divs);
const button = document.createElement("button");
button.textContent = "analyze me";
button.classList.add("taurus-button");
button.onclick = function (e) {
  e.stopPropagation();
  console.log("in the function", divs);
  if (button.classList.contains("showing-debunk")) {
    button.classList.remove("showing-debunk");
  } else {
    button.classList.add("showing-debunk");
  }
};
divs[0].parentElement.appendChild(button);
