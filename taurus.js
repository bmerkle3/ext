const url = window.location.href;

const button = document.createElement("button");
const debunkBox = document.createElement("div");
debunkBox.className = "box-visible";
debunkBox.innerHTML = "you are reading me!";

button.textContent = "analyze me";
button.classList.add("button-plain");

window.addEventListener("load", function () {
  // the way i listen for page load isn't good. If i click in from the search results page this doesn't run :(
  console.log("look, mom! I can load");
  const divs = document.getElementsByTagName("div");
  const targetNode =
    divs[0].firstChild.childNodes[3].childNodes[1].childNodes[1].childNodes[1]
      .childNodes[1];

  targetNode.classList.add("bg-black");
  targetNode.appendChild(button);

  button.onclick = function (e) {
    e.stopPropagation();

    if (button.classList.contains("button-showing-debunk")) {
      button.classList.remove("button-showing-debunk");
      button.textContent = "analyze me";
      targetNode.removeChild(debunkBox);
    } else {
      button.classList.add("button-showing-debunk");
      targetNode.appendChild(debunkBox);
      button.textContent = "hide this debunk";
    }
  };
});
