const url = window.location.href;

// var divs = document.querySelectorAll("div");

// var containerFixed = document.getElementsByClassName("l-container-fixed");
// var containerChild = containerFixed.firstChild;
// divs[0].firstChild.classList.add("bg-black");

// targetNode.classList.add("bg-black");

const button = document.createElement("button");
const debunk = document.createElement("div");
debunk.className = "box-visible";
debunk.innerHTML = "you are reading me!";

button.textContent = "analyze me";
button.classList.add("taurus-button");

window.addEventListener("load", function () {
  const divs = document.getElementsByTagName("div");
  const targetNode =
    divs[0].firstChild.childNodes[3].childNodes[1].childNodes[1].childNodes[1]
      .childNodes[1];

  targetNode.classList.add("bg-black");
  targetNode.appendChild(button);

  console.log("right after ", targetNode);

  button.onclick = function (e) {
    e.stopPropagation();
    console.log("in the function", divs[0][3]);
    if (button.classList.contains("showing-debunk")) {
      button.classList.remove("showing-debunk");
    } else {
      button.classList.add("showing-debunk");
    }
  };
});

// divs[0].parentElement.appendChild(button);
