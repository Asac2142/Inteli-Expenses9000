const expenseApp = require('../src/index');
const testFile = require('../src/file.utils');

describe("Integration test for Big Big Band Ecuatoriano app", () => {   
    it("should not keep reading the file once it reads a zero character", () => {
        expenseApp.setExpensesData(testFile);          
        expect(expenseApp.balancePerTrip.length).toEqual(5);
    });
});
