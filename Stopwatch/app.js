const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const restartBtn = document.querySelector("#restart")
let secondBox = document.querySelector("#second");
let pauseBtn = document.querySelector("#pause");
let minuteBox = document.querySelector("#minutes");
let hourBox = document.querySelector("#hours")


let hour = 0;
let minute = 0;
let second = 0;

pauseBtn.id = "hide";
restartBtn.id = "hide"


startBtn.addEventListener("click", () => {
  console.log(start)
  secondCount();
  pauseBtn.id = "pause";
  startBtn.id = "hide"
  startBtn.disabled = true;
})

restartBtn.addEventListener("click", () => {
  secondCount();
  restartBtn.disabled = true
  pauseBtn.id = "pause"
  restartBtn.id = "hide"
})

function secondCount(){
  let clock = setInterval(() => {
  second++;
  //realNum();
  newNum();
  pauseBtn.addEventListener("click", () => {
    clearInterval(clock);
    newNum();
    restartBtn.id = "restart"
    restartBtn.disabled = false
    pauseBtn.id = "hide"
    console.table(`Hour is ${hour} Minutes is ${minute}, second is ${second}`)
  })

  resetBtn.addEventListener("click", () => {
  console.log("Reset");
  clearInterval(clock);
  second = 0;
  minute = 0;
  hour = 0;
  newNum();
  startBtn.disabled = false;
  startBtn.id = "start";
  pauseBtn.id = "hide";
  })
}, 1000);
}
// secondCount();

function newNum(){
  if(second < 10){
    secondBox.innerText = "0" + second;
  }else if(second == 60){
    minute++;
    second = 0;
    secondBox.innerText = second;
  }else{
    secondBox.innerText = second;
  }
  if(minute < 10){
    minuteBox.innerText = "0" + minute;
  }else if(minute == 60){
    hour++;
    minute = 0;
    minuteBox.innerText = minute
  }else{
    minuteBox.innerText = minute;
  }
  if(hour < 10){
    hourBox.innerText = "0" + hour;
  }else if(hour == 60){
    hour = 0;
    hourBox.innerText = hour
  }else{
    hourBox.innerText = hour;
  }
}