require("dotenv").config();
//  need to get package.json and npm install working for this to actually use the dotenv package

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

// need to get package.json and npm install working for this to actually use the dotenv package
let someResponse = [];
fetch(
  "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?upc=016000123151",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  }
)
  .then((response) => response.json())
  .then((dataa) => (someResponse = dataa))
  .catch((err) => {
    console.log(err);
  });
// use AWAIT to time this better.

const ul = document.getElementsByTagName("ul");
const listItems = ul[3].firstChild.childNodes;

window.addEventListener("load", function () {
  // the way i listen for page load isn't good. If i click in from the search results page this doesn't run :(

  console.log(someResponse);
  // grab text from the page, match it using regex comparing to keyword list
  const text = ul[3].firstChild.innerHTML;
  const keywords = ["Gluten Free", "Heart Healthy", "sugar free"];
  const matched = [];

  keywords.forEach(textMatcher);
  function textMatcher(item) {
    re = new RegExp(item, "gi");
    find = text.match(re);
    if (find) {
      matched.push(find[0]);
    }
  }
  console.log("matched", matched);

  // grab element on page where we want button to show, add elements there
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
