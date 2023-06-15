//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");

//Select all of the list items with a class of "second".
document.getElementsByClassName("second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementById("container").lastElementChild.getElementsByClassName("third")[0];

//Give the section with an id of container the text "Hello!".
document.getElementById("container").innerHTML = "Hello!";

//Add the class main to the div with a class of footer.
document.querySelector(".footer").classList.add("main");

//Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove("main");

//Create a new li element.
let newLi = document.createElement("li");

//Give the li the text "four".
newLi.innerHTML = "four";

//Append the li to the ul element.
document.querySelector("#container").firstElementChild.appendChild(newLi);

//Loop over all of the lis inside the ol tag and give them a background color of "green".
let lis = document.querySelector("#container").lastElementChild.getElementsByTagName("li");
let lisArr = [...lis];
lisArr.forEach(element => {
    element.style.backgroundColor = "green";
})

//Remove the div with a class of footer.
document.getElementsByClassName("footer")[0].remove();