// ------------------ Missing Number in Array ------------------
let numArray = [1, 2, 3, 5, 6, 7, 8, 10];
let expected = 1;

for (let num of numArray) {
    if (num !== expected) {
        console.log(`Missing in array: ${expected}`);
        expected++;
    }
    console.log(`Number: ${num}`);
    expected++;
}

// ------------------ Email & Phone Validation ------------------

// DOM Elements
let mailInput = document.querySelector("#mailInput");
let numberInput = document.querySelector("#numberInput");
let enterBtn = document.querySelector("#enter");
let result = document.querySelector("#res");
let finalResult = document.querySelector("#finalRes");

// ---------- Validation Functions ----------

// Digits only check
const validateDigits = (number) => {
    for (let digit of number) {
        if (digit < '0' || digit > '9') {
            return "Number can't contain letters or symbols";
        }
    }
    return true;
};

// Phone length check
const validatePhoneLength = (number) => {
    if (number.length !== 10) {
        return "Number length must be exactly 10 digits";
    }
    return true;
};

// Email format check
const validateEmail = (email) => {
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");

    if (atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1) {
        return true;
    }
    return "Email must contain @ and . (eg: xyz@gmail.com)";
};

// ---------- Main Controller ----------

function validateEmailNumber(email, number) {

    // Reset previous messages
    result.innerText = "";
    finalResult.innerText = "";

    let digitCheck = validateDigits(number);
    if (digitCheck !== true) {
        result.innerText = digitCheck;
        return;
    }

    let lengthCheck = validatePhoneLength(number);
    if (lengthCheck !== true) {
        result.innerText = lengthCheck;
        return;
    }

    let emailCheck = validateEmail(email);
    if (emailCheck !== true) {
        result.innerText = emailCheck;
        return;
    }

    // All validations passed
    mailInput.value = "";
    numberInput.value = "";
    finalResult.innerText = "Email & Phone number verified";
}

// ---------- Event Listener ----------

enterBtn.addEventListener("click", () => {
    let mail = mailInput.value.trim();
    let number = numberInput.value.trim();
    validateEmailNumber(mail, number);
});
