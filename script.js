/* Module 5 Project Script File */
var score = 0;
function myFunction() {
var txt
var question = prompt("What color is the sky?");
if (question == ("Blue")) {
txt = "Correct!";
score = score+100;
}
else{
txt = "Incorrect";}
    document.getElementById("tag").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction1() {
var txt
var question1 = prompt("When is Cinco De Mayo?");
if (question1 == ("May 5")) {
txt = "Correct!";
score = score+100;
}
else{
txt = "Incorrect";}
    document.getElementById("tag1").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction2() {
var txt
var question2 = prompt("What is Northwest school color?");
if (question2 == ("Green")) {
txt = "Correct!";
score = score+100;
}
else{
txt = "Incorrect";}
    document.getElementById("tag2").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction3() {
var txt
var question3 = prompt("What state is Kansas City in?");
if (question3 == ("Missouri")) {
txt = "Correct!";
score = score+200;
}
else{
txt = "Incorrect";}
    document.getElementById("tag3").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction4() {
var txt
var question4 = prompt("What class is this for?");
if (question4 == ("Script Programming")) {
txt = "Correct!";
score = score+200;
}
else{
txt = "Incorrect";}
    document.getElementById("tag4").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction5() {
var txt
var question5 = prompt("What date is this assignment due?");
if (question5 == ("April 9")) {
txt = "Correct!";
score = score+200;
}
else{
txt = "Incorrect";}
    document.getElementById("tag5").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction6() {
var txt
var question6 = prompt("What color is vanilla ice cream?");
if (question6 == ("White")) {
txt = "Correct!";
score = score+300;
}
else{
txt = "Incorrect";}
    document.getElementById("tag6").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction7() {
var txt
var question7 = prompt("Who is the President? (Last Name Only)");
if (question7 == ("Trump")) {
txt = "Correct!";
score = score+300;
}
else{
txt = "Incorrect";}
    document.getElementById("tag7").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}

function myFunction8() {
var txt
var question8 = prompt("Who was the president? (Last Name Only)");
if (question8 == ("Obama")) {
txt = "Correct!";
score = score+100;
}
else{
txt = "Incorrect";}
    document.getElementById("tag8").innerHTML = txt;
    document.getElementById("score").innerHTML = score;
}