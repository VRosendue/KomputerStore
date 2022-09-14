//Computer getElements
const computersSelectElement = document.getElementById('computers');
const computerSpecsElement = document.getElemenyById('computerSpecs');
const computerImageElement = document.getElementById('computerImage');
const computerNameElement = document.getElementById('computerName');
const computerDescriptionElement = document.getElementById('computerDescription');
const computerPriceElement = document.getElementById('computerDescription');


//Work getElements
const workBalanceElement = document.getElementById('workBalance');
const workButtonElement = document.getElementById('workButton');


//Bank getElements
const bankBalanceElement = document.getElementById('bankBalance');
const buyComputerElement = document.getElementById('buyComputer');
const repayCurrentLoanButtonElement = document.getElementById('repayCurrentLoanButton');

let computers = [];
let selectedComputer;
let workBalance = 0;
let resetValue = 0;
let bankBalance = 0;
let currentLoan = 0;

workBalance.innerHTML = parseInt.resetValue;

bankBalanceElement.innerHTML = parseInt.resetValue;

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
.then(response => response.json())
.then(data => computers = data)
.then(computers => addComputersToMenu(computers));
//Add all computers to menu
const addComputersToMenu = (computers) => {
    selectedComputer = computers[0];
    computers.forEach(x => addComputersToMenu(x));
    computerPriceElement.innerText = computers[0].price;
    computerSpecsElement.innerText = computers[0].specs;
    computerNameElement.innerText = computers[0].title;
    computerDescriptionElement.innerText = computers[0].description;
    computerImageElement.src = "https://noroff-komputer-store-api.herokuapp.com/" + computers[0].image;

}
//Computer add to menu 
const addComputerToMenu = (computer) => {
    const computerElement = document.createElement("options");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.title));
    computersSelectElement.appendChild(computerElement);
}
//HandleComputer Menu
const handleComputerMenuChange = e => {
    selectedComputer = computers[e.target.selectedIndex];
    console.log(selectedComputer.price);
    computerPriceElement.innerText = selectedComputer.price;
    computerSpecsElement.innerText = selectedComputer.specs;
    computerNameElement.innerText = selectedComputer.name;
    computerDescriptionElement.innerText = selectedComputer.description;
    computerImageElement.src = 'https://noroff-komputer-store-api.herokuapp.com/${selectedComputer.image}';
}

//Computer purchase for the Buy Laptop button
const computerPurchase = () => {
    if (bankBalance >= selectedComputer.price) {
        alert("Computer purchased");
        bankBalance -= selectedComputer.price;
        bankBalanceElement.innerHTML = new bankBalance;
    } else {
        alert('Not enough money for a laptop');
    }
}

//Work function to increase pay
const moneyWork = () => {
    
    workBalance += 500;
    workBalanceElement.innerHTML = workBalance;
}

//Function to loan money - Still need to add restrictions 
const loanMoney = () => {

    if (currentLoan > 0) {
        alert('Must pay back the current loan before undertaking a new one');
    } else {
        const prompt = Number(window.prompt('How much do you want to loan? '));
    }
    currentLoan = prompt;
    document.getElementById('repayCurrentLoan');

}

//Functions to buttons
buyComputerElement.addEventListener('click', computerPurchase);
workButtonElement.addEventListener('click', moneyWork);
computersSelectElement.addEventListener("change", handleComputerMenuChange);
repayCurrentLoanElement.addEventListener("click", loanMoney);