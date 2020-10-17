const inputFile = require('./file.utils');

const MAX_AMOUNT = 1000.00;
const PRECISION = 2;

const file = inputFile;
const balancePerTrip = [];
let expensesPerTrip = [];
let totalTrips = 0;
let flag = false;

const setExpensesData = (dataFile) => {
    let total = 0;
    let average = 0;

    dataFile.on('line', (line) => {
        if (line.startsWith('0')) {
            dataFile.close();
            dataFile.removeAllListeners();
            flag = true;
        }

        if (line.startsWith('$')) {
            expensesPerTrip.push(parseFloat(line.split('$')[1]));
        } else {            
            setTotalTrips();
            if (expensesPerTrip.length) {
                expensesPerTrip = verifyExpenses(expensesPerTrip);
                total = getTotal(expensesPerTrip);                
                average = getAverage(expensesPerTrip, total);                
                computeBalance(expensesPerTrip, average);                
                displayBalance();
                resetExpensesPerTrip();
            }            
        }
    });
};

const resetExpensesPerTrip = () => {
    expensesPerTrip = [];
};

const setTotalTrips = () => {
    !flag ? totalTrips++ : totalTrips;
};

const verifyExpenses = (expenses) => {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i] > MAX_AMOUNT) {
            expenses[i] = MAX_AMOUNT;
        }
    }
    return expenses;
};

const getTotal = (expenses) => {        
    return expenses.reduce((acummulativeExpense, expense) =>  acummulativeExpense + expense , 0);
};

const getAverage = (expenses) => {
    const average = expenses.reduce((total, expense) => total + expense, 0) / expenses.length;    
    return average.toString().substring(0, getNumberOfDecimals(average));
};

const computeBalance = (expenses, average) => {
    let total = 0;

    expenses.map(expense => {
        if (expense < average) {
            total += (average - expense)
        }
    });
    
    balancePerTrip.push(total.toFixed(PRECISION));
};

const getNumberOfDecimals = (number) => {
    const array = number.toString().split('.');

    switch (array[0].length) {
        case 1:
            return 4;
        case 2:
            return 5
        case 3:
            return 6;
        case 4:
            return 7;
    }
};

const displayBalance = () => {  
    if (balancePerTrip.length === totalTrips) {
        balancePerTrip.map(balance => console.log(`$${balance}`));
    }
};

setExpensesData(file);

exports.balancePerTrip = balancePerTrip;
exports.verifyExpenses = verifyExpenses;
exports.getTotal = getTotal;
exports.getAverage = getAverage;
exports.computeBalance = computeBalance;
exports.setExpensesData = setExpensesData;
