const expenseApp = require('../src/index');

describe("Unit tests for Big big band ecuatoriano app", () => {    
    let expenses;
    let average;

    beforeEach(() => {
        expenses = [55.11, 569.99, 123.33];
        average = 15.66;
    });

    it("should set an amount of 1000.00 if an expense is greater than 1000.00", () => {
        const expenses = [55.11, 569.99, 1250.00, 1300.10];
        const expectedExpenses = [55.11, 569.99, 1000.00, 1000.00];        
        const actualExpenses = expenseApp.verifyExpenses(expenses);                
        expect(actualExpenses).toEqual(expectedExpenses);        
    });

    it("should return a value greater than or equal to zero when calculating the total expenses", () => {        
        const actualTotal = expenseApp.getTotal(expenses);
        expect(actualTotal).toBeGreaterThanOrEqual(0);
    });

    it("should return an average magnitud greater than or equal to zero", () => {
        const actualAverage = expenseApp.getAverage(expenses);
        expect(actualAverage).toBeGreaterThanOrEqual(0);
    });

    it("should have a length greater than zero when calculating the total balance per trip", () => {
        expenseApp.computeBalance(expenses, average);
        expect(expenseApp.balancePerTrip.length).toBeGreaterThan(0);
    });
});
