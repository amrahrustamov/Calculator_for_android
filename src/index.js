
const zero = document.getElementsByClassName('zero')[0];
const one = document.getElementsByClassName('one')[0];
const two = document.getElementsByClassName('two')[0];
const three = document.getElementsByClassName('three')[0];
const four = document.getElementsByClassName('four')[0];
const five = document.getElementsByClassName('five')[0];
const six = document.getElementsByClassName('six')[0];
const seven = document.getElementsByClassName('seven')[0];
const eight = document.getElementsByClassName('eight')[0];
const nine = document.getElementsByClassName('nine')[0];
const myInput = document.getElementById("inputStyle");
const inputStyleOperator = document.getElementById("inputStyleOperator");
const inputStyleNext = document.getElementById("inputStyleNext");


zero.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 0;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
one.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 1;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
two.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 2;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
three.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 3;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
four.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 4;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
five.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 5;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
six.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 6;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
seven.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 7;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
eight.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 8;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});
nine.addEventListener("click", function(event) {
    event.preventDefault();
    myInput.value += 9;
    myInput.style.display = 'block';
    inputStyleOperator.style.display = 'none';
});



/****************************************************/

const divide = document.getElementsByClassName('divide')[0];
const multiplication = document.getElementsByClassName('multiplication')[0];
const minus = document.getElementsByClassName('minus')[0];
const plus = document.getElementsByClassName('plus')[0];

const result = myInput;

divide.addEventListener("click", (event) => {
    event.preventDefault();
    myInput.style.display = 'none';
    inputStyleOperator.style.display = 'block';
    inputStyleOperator.value = "÷";
    myInput = 0;
});
multiplication.addEventListener("click", (event) => {
    event.preventDefault();
    myInput.style.display = 'none';
    inputStyleOperator.style.display = 'block';
    inputStyleOperator.value = "x";
    myInput = 0;
});
minus.addEventListener("click", (event) => {
    event.preventDefault();
    myInput.style.display = 'none';
    inputStyleOperator.style.display = 'block';
    inputStyleOperator.value = "-";
    myInput = 0;
});
plus.addEventListener("click", (event) => {
    event.preventDefault();
    myInput.style.display = 'none';
    inputStyleOperator.style.display = 'block';
    inputStyleOperator.value = "+";
    myInput = 0;
});