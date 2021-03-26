
var a = "5"
var b = 5
if(a === b){
    alert("Yes")
}
else{
    alert("No")
}

var score = 0;
var x = prompt("Enter something")
var correctAnswer = "Saad";
if (x === correctAnswer) {
    alert("Correct!");
    score++
    alert(score)
}

> greater than
< less than
>= greater and equal
<= less and equal
!= Not 

&& and
|| OR

var percentage = prompt("Enter Your Percentage")
if (percentage >= 80 && percentage <= 100) {
    alert("Your Grade is A+")
}
else if (percentage >= 70 && percentage < 80) {
    alert("Your Grade is A")
}

else if (percentage >= 60 && percentage < 70) {
    alert("Your Grade is B")
}

else if (percentage >= 50 && percentage < 60) {
    alert("Your Grade is C")
}

else if (percentage >= 40 && percentage < 50) {
    alert("Your Grade is D")
}

else if (percentage >= 33 && percentage < 40) {
    alert("Your Grade is E")
}

else {
    alert("Fail")
}

if (0 === 1) {
    if (3 === 2) {
         alert("ok")
    }
    else if (23 === 13) {
         alert("ye bhi theak he")
    }
    else {
        alert("no ")
    }
}
else {
    alert("hmm")
}

var uname = "Saad"
var pwd = "012"

if(uname == "Saad" || pwd == "123"){
    alert("ok")
}

var a = 1
var b = 1 
if(a != b){
    alert("Saad")
}
else{
    alert("Yasir")
}

var paise = 0;

var x = prompt("Jani khaape pe chalein ?")
if(x == "Paise nahi hein"){
    alert("Chal main dedeta hoon")
    paise += 500
    alert(paise)
}
else if (x == "Han chalo"){
    alert("Arey bhai bhai bhai")
}
