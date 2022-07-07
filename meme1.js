
//to make meme

let enter = document.querySelector("#submit");
let container = document.querySelector(".container");

enter.addEventListener("click", () => {
//select the image input and transform into correct url output
let imageUrl = document.querySelector("#imgurl");
let urlImage = "url('" + imageUrl.value + "')";
//select top and bottom text
let topText = document.querySelector("#top");
let bottomText = document.querySelector("#bottom");

  //create a new div in html
  let memeDiv = document.createElement("div");
  //append new div in body
  document.body.appendChild(memeDiv);
  //set class name of div
  memeDiv.setAttribute("class", "memeClass")

 //update the meme background image = "url()"
  memeDiv.style.backgroundImage = urlImage;

  //create a new paragraph in html
  let memeTop = document.createElement("p");
  //append new paragraph in div
  memeDiv.appendChild(memeTop);
  //update the top text.value
  memeTop.innerText = topText.value;
  //set top text at top of div
  memeTop.style.top = "5px";

  //create a new paragraph in html
  let memeBottom = document.createElement("p");
  //append new paragraph in div
  memeDiv.appendChild(memeBottom);
  //update the bottom text.value
  memeBottom.innerText = bottomText.value;
  //set bottom text at the bottom of div
  memeBottom.style.bottom = "5px";

  //create a new div in html
  let overlayDiv = document.createElement("div");
  //append new overlay div in meme div
  memeDiv.appendChild(overlayDiv);
  //set class name to overlay
  overlayDiv.setAttribute("class", "overlay")
  //set overlay text
  overlayDiv.innerText = "click to delete";


})

//to delete a meme

let body = document.querySelector("body")
body.addEventListener("click", (event) => {
  let clicked = event.target.closest(".memeClass")

  if (!clicked) return;

  if (clicked) {
    clicked.remove();
  };
})







