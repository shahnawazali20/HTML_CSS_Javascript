console.log("connected");
let btn = document.querySelector(".submit")


function printInput() {
  let msg = document.querySelector(".input").value;
  // Creating a new div and add this
  let newDiv = document.createElement("div");
  newDiv.className = "check";
  document.querySelector(".main").appendChild(newDiv);
  //Creating a new check box and label 
  let newInput = document.createElement("input");
  newInput.type = "checkbox"
  newInput.id = "agree"
  let label = document.createElement("label");
  label.htmlFor = "agree";
  label.innerText = msg;
  newDiv.appendChild(newInput);
  newDiv.appendChild(label);
  // cleaning the input
  document.querySelector(".input").value = ""
};