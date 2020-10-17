import { inputFile } from './file.utils.js';

const MAX_AMOUNT = 1000.00;
const PRECISION = 2;

const balancePerTrip = [];
const file = inputFile;
let expensesPerTrip = [];
let totalTrips = 0;

const setExpensesData = (dataFile) => {
    let total = 0;
    let average = 0;

    dataFile.on('line', (line) => {                          
        if (line.startsWith('$')) {
            expensesPerTrip.push(parseFloat(line.split('$')[1]));
        } else {            
            setTotalTrips(line);
            if (expensesPerTrip.length) {
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

const setTotalTrips = (streamData) => {
    if (streamData !== '0') {
        totalTrips++;
    }
};

const getTotal = (expenses) => {    
    let acummulativeExpense = 0;

    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i] > MAX_AMOUNT) {
            expenses[i] = MAX_AMOUNT;
        }
        acummulativeExpense += expenses[i];
    }

    return acummulativeExpense;
};

const getAverage = (expenses) => {
    const average = expenses.reduce((expense, c) => expense + c, 0) / expenses.length;    
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
