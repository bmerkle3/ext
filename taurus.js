const url = window.location.href;

const debunkBox = document.createElement("div");
debunkBox.innerHTML = "you are reading me!";
debunkBox.className = "box-visible";

const grabText = document.createElement("div");
const textValue = "this is a test";
// eventually this should be set to some variable but need to sort out await stuff first
grabText.innerHTML = textValue;
debunkBox.className = "box-visible";

const button = document.createElement("button");
button.textContent = "analyze me";
button.classList.add("button-plain");

const endpoint = "https://covid19.mathdro.id/api/countries";

let countries;
// use await to time this better.
const testing = fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => (countries = data));
console.log("countries", testing);
// too soon here to declare countryName

window.addEventListener("load", function () {
  // the way i listen for page load isn't good. If i click in from the search results page this doesn't run :(
  console.log("look, mom! I can load");
  console.log(countries["countries"][0]["name"]);
  const countryName = countries["countries"][0]["name"];
  console.log("a", countryName);
  const divs = document.getElementsByTagName("div");
  const targetNode =
    divs[0].firstChild.childNodes[3].childNodes[1].childNodes[1].childNodes[1]
      .childNodes[1];

  targetNode.classList.add("bg-pink");
  targetNode.appendChild(button);
  targetNode.appendChild(grabText);

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
      console.log("last chance", countryName);
    }
  };
});
