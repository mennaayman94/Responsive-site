
window.onload=function(){

startTime ()
alert("Welcome To our WebSite");
var person = prompt("Please enter your name:");
var txt;
if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "welcome " + person;
  document.getElementById("hi").innerHTML=txt;
}

function startTime () {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;

}

var color1=  document.getElementById('btn1');
var color2=  document.getElementById('btn2');
var color3=  document.getElementById('btn3');
var color4=  document.getElementById('btn4');
var color5=  document.getElementById('btn5');
function random (){
   return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


color1.onclick =  function color(){
  document.body.style.backgroundColor = "red";
}
color2.onclick =  function color(){
  document.body.style.backgroundColor = "blue";
}
color3.onclick =  function color(){
  document.body.style.backgroundColor = "green";
}
color4.onclick =  function color(){
  document.body.style.backgroundColor = "yellow";
}
color5.onclick =  function color(){
  document.body.style.backgroundColor = random();
}

}
