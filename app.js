// Sort products by price (low → high)
let productPrice = [40, 60, 70, 30, 10];
productPrice.sort((a, b) => a - b);
console.log(productPrice);

// Filter students who passed (marks > 40)
let result = document.querySelector("#result");
let enterBtn = document.querySelector("#enter");
let marksInput = document.querySelector("#marks");

enterBtn.addEventListener("click", () => {
    let marks = Number(marksInput.value.trim());

    if (marks <= 0 || marks > 100) {
        result.innerText = "Invalid input, please enter marks 0–100";
    } else if (marks > 40) {
        result.innerText = `Pass, marks = ${marks}`;
    } else {
        result.innerText = `Fail, marks = ${marks}`;
    }
});

// Form handling
let form = document.querySelector("#userForm");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    console.log(form.elements["name"].value);
    console.log(form.elements["age"].value);
    console.log(form.elements["gender"].value);
});
