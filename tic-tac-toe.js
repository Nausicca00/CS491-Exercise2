/*
Date: June 12, 2025
Author: Kaylyn Duncan
*/

//Game Playing Logic

//Converts button ID to board index.
function idToIndex(id) {
  return {
    one: 0, two: 1, three: 2,
    four: 3, five: 4, six: 5,
    seven: 6, eight: 7, nine: 8
  }[id];
}

//Game Presentation Logic
function toggleBtn(){
  var btn = document.getElementById("btn");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");
  if(btn.value == "Clear"){
    btn.value = "Start";
    one.value = "";
    one.disabled = false;
    two.value = "";
    two.disabled = false;
    three.value = "";
    three.disabled = false;
    four.value = "";
    four.disabled = false;
    five.value = "";
    five.disabled = false;
    six.value = "";
    six.disabled = false;
    seven.value = "";
    seven.disabled = false;
    eight.value = "";
    eight.disabled = false;
    nine.value = "";
    nine.disabled = false;
  }
  else {
    
  }
}

function makeX(num){
  var btn = document.getElementById(num);
  var start = document.getElementById("btn");
  btn.value = "X";
  btn.disabled = true;
  start.value = "Clear";
}