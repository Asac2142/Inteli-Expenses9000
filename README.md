# ![alt text](https://cdn4.iconfinder.com/data/icons/Primo_Icons/PNG/128x128/calculator.png "icon") INTELI-EXPENSES 9000

INTELI-EXPENSES 9000, is NodeJS application with focus on calculating expenses distributed on a group of people.

##  Requeriments

Make sure you have installed on your computer [NodeJS](https://nodejs.org/en/)

##  Installation

```javascript
npm install
```
##  Usage

To run the app, use:
```javascript
npm start
```

For running the tests, use:
```javascript
npm test
```

## Description

- INTELI-EXPENSES 9000 gets as an input a file where it has detailed all the expenses made in a group of people.
- The idea is to calculate a fair amount of money for the total expense that every member of a group should pay. 
- It is possible to have many expenses per trip.
- The file has the following structure, it has a whole positive numbers that represents the number of persons in a group, followed by the expenses made for each member starting with a "$" sign.

![alt text](https://i.ibb.co/qY5q907/Selection-034.png "Ejemplo de archivo para gastos")


- Each member of the group is not allowed to expense more than $1000.00; if so, INTELI-EXPENSES 9000, automatically takes the maximum amount by default instead of that value. 
- Reading the file will end when it finds a "0" character.

## Source code - explanation

- The main script is index.js, inside of it, most of the logic is written here.
- Index.js, makes use of another script that is in charge of preparing the file reading.
- Inside of index.js, the function that starts the whole process is "setExpensesData( )" which receives a file as an input.
- There are many functions that are in charge of a single concern:
  - **setTotalTrips =>** it's in charge of adding 1 to a counter which counts how many trips has been made.
  - **verifyExpenses =>** it validates that every expense written in the input file is less than or equal to $1000.00.
  - **getTotal =>** returns the total expense per trip.
  - **getAverage =>** returns the average expense per trip.
  - **setLength =>** function that receives a single total expense that depending of the whole number of it, it tells the length that it should be cut in order to have a precision of 2 digits.
   
    For example, given 1.99, the function should return 4, because, from the whole number "1" we should count 4 spaces in order to have precision of 2 digits.
    
        1 . 9 9  ---> expense
        1 2 3 4  ---> position
        
        
    Another example, given 999.1227..., the function should return 6, indicating the spaces we should count in order to have an amount with precision of 2, giving us the value of 999.12
        
        9 9 9 . 1 2 2 7 ---> expense
        1 2 3 4 5 6     ---> position
                                                  

  - **computeBalance =>** is responsible for calculating the total money to equal the travel expenses of the group of people, receives the travel expense array and the average of that trip.
  - **displayBalance =>** outputs the result.
  - **resetExpensesPerTrip =>** resets an array which holds the amounts made in a trip.
