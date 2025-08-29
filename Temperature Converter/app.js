console.log("Connected");

let form = document.querySelector(".form");
let showTemp = document.querySelector("#showTemp")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userTemp = parseFloat(document.querySelector("#input").value);
  let convertFrom = document.getElementById("convertform").value;
  let = convertTo = document.getElementById("convertto").value;

  console.table({ userTemp, convertFrom, convertTo });

  if (!isNaN(userTemp) && convertFrom !== "" && convertTo !== "") {
    if (convertFrom === convertTo) {
      alert("Same units selected.");
      showTemp.innerText = "Same units selected."
    } 
    else if (convertFrom === "kelvin") {
      if (convertTo === "celcius") {
        finalTemp = userTemp - 273.15
        showTemp.innerText = `${userTemp} ${convertFrom} is equal to ${finalTemp} ${convertTo}`
      } else if (convertTo === "fahrenheit") {
        finalTemp = (userTemp - 273.15) * 9/5 + 32
        showTemp.innerText = `${userTemp} ${convertFrom} is equal to ${finalTemp} ${convertTo}`
      }
    } 
    else if (convertFrom === "celcius") {
      if (convertTo === "kelvin") {
        finalTemp = userTemp + 273.15
        showTemp.innerText = `${userTemp} ${convertFrom} is equal to ${finalTemp} ${convertTo}`
      } else if (convertTo === "fahrenheit") {
        finalTemp = (userTemp * 9/5) + 32
        showTemp.innerText = `${userTemp} ${convertFrom} is equal to ${finalTemp} ${convertTo}`
      }
    } 
    else if (convertFrom === "fahrenheit") {
      if (convertTo === "kelvin") {
        finalTemp = (userTemp - 32) * 5/9 + 273.15
        showTemp.innerText = `${userTemp} ${convertFrom} is equal to ${finalTemp} ${convertTo}`
      } else if (convertTo === "celcius") {
        finalTemp = (userTemp - 32) * 5/9
        showTemp.innerText = `${userTemp} ${convertFrom} is equal to ${finalTemp} ${convertTo}`
      }
    }
  } else {
    alert("Please enter a valid temperature and units.");
  }
  userTemp = ""
  convertFrom = ""
  convertTo = ""
});
