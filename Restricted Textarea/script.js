let textNumber = document.getElementById("text")
let textarea = document.getElementById("textarea")
let totalText = 0


textarea.addEventListener("keydown", (e) => {
  if(e.key === "Backspace"){
    totalText--;
  }else if(e.key === "Enter"){
    totalText = totalText + 1;
    totalText--
  }else{
      totalText++;
  }
  if(totalText < 0){
    totalText = 0
  }
  if(totalText > 100){
    textarea.style.border = "1px solid red"
    textNumber.style.color = "red"
  }else{
    textarea.style.border = "1px solid black"
    textNumber.style.color = "black"
  }
  textNumber.innerText = `${totalText}/100`
  //console.log(e.key)
  //console.log(totalText)
})
