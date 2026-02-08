let incomeInput = document.querySelector("#income");
let expenseInput = document.querySelector("#expense");
let incomeBtn = document.querySelector("#incomeBtn");
let expenseBtn = document.querySelector("#expenseBtn");
let incomeList = document.querySelector("#incomelist");
let expenseList = document.querySelector("#expenselist");
let display = document.querySelector("#display");
let balanceBtn = document.querySelector("#balanceBtn");
let incomeArr = [];
let expenseArr = [];
incomeBtn.addEventListener("click", () => {
    let income = Number(incomeInput.value);
    if (income <= 0){
        display.innerText = "Not a valid input!";   
    }else{
        incomeArr.push(income);
        let li = document.createElement("li");
        li.innerText = income;
        incomeList.appendChild(li);
        incomeInput.value = ""
        display.innerText = "Income Added successfully."
    }
});

expenseBtn.addEventListener("click", () => {
    let expense = Number(expenseInput.value);
    if (expense <= 0){
        display.innerText = "Not a valid input!";   
    }else{
        expenseArr.push(expense);
        let li = document.createElement("li");
        li.innerText = expense;
        expenseList.appendChild(li);
        expenseInput.value = ""
        display.innerText = "Expense Added Successfully."
    }
});

balanceBtn.addEventListener("click",() => {
    if(incomeArr.length === 0 && expenseArr.length === 0){
        display.innerText = "No data available";
        return;
    }
    let balance = 0;
    let totalIncome = 0;
    let totalExpense = 0;
    for(let income of incomeArr){
       totalIncome += income;
    }
    for(let expense of expenseArr){
        totalExpense += expense;
    }
    balance = totalIncome - totalExpense;
    display.innerText = `Total Income: ${totalIncome} | Total Expense: ${totalExpense} | Final Balance: ${balance}`;

})