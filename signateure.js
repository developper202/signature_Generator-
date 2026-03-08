
 const inputName = document.getElementById('nom');
const inputTitle = document.getElementById('titre');
const inputTel = document.getElementById('tele');
const inputEmail = document.getElementById('email');

const displayName = document.getElementById('display-name');
const displayTitle = document.getElementById('display-title');
const displayTel = document.getElementById('display-tel');
const displayEmail = document.getElementById('display-email');

 inputName.addEventListener("input", function () {
    displayName.textContent =
        inputName.value.trim() === "" ? "FULL NAME" : inputName.value;
});

inputTitle.addEventListener("input", function () {
    displayTitle.textContent =
        inputTitle.value.trim() === "" ? "Title" : inputTitle.value;
});

inputTel.addEventListener("input", function () {
    displayTel.textContent =
        inputTel.value.trim() === "" ? "tele:" : "+212 "  + inputTel.value;
});

inputEmail.addEventListener("input", function () {
    displayEmail.textContent =
        inputEmail.value.trim() === "" ? "" :  inputEmail.value;
});
const downloadBtn = document.querySelector('button');

downloadBtn.addEventListener("click", function() {
    location.reload()});