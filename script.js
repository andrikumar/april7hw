//changing the intro to whatever I want
document.getElementById("intro").innerHTML = "<h1> This is a game in which I waste your time by asking 10 questions<h1>";

function buttonClick() {
  const one = document.getElementById("questionOne").value;
  const two = document.getElementById("questionTwo").value;
  const three = document.getElementById("questionThree").value;
  document.getElementById("answers").innerHTML = `here is what you said: ${one}, ${two}, ${three}`;
}

document.getElementById('randomButton').addEventListener('click', e => {
  buttonClick();
})

document.getElementById('hwButton').addEventListener('click', e => {
  hwAnswers();
})

const inputs = document.getElementsByTagName('input');
const firstDiv = document.getElementById('intro');
const firstNumber = firstDiv.getElementsByTagName("*");
const secondDiv = document.getElementById('questions');
const secondNumber = secondDiv.getElementsByTagName("*");


function hwAnswers () {
  //how many of the elements are the same
  document.getElementById("numberOfSame").innerHTML = "there are " + inputs.length + " input tags on this page";
//how many elements are in the first div
  document.getElementById("firstID").innerHTML = "there are " + firstNumber.length + " elements in the first ID";
//how many elements in the second div
document.getElementById("secondID").innerHTML = "there are " + secondNumber.length + " elements in the second ID";

}
