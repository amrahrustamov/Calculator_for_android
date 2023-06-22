
export function Operators() {
    
const divide = document.getElementsByClassName('divide')[0];
const multiplication = document.getElementsByClassName('multiplication')[0];
const minus = document.getElementsByClassName('minus')[0];
const plus = document.getElementsByClassName('plus')[0];


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
}