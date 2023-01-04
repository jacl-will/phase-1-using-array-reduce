const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

/* FIRST ATTEMPT: Passed first test 
const totalBatteries = batteryBatches.reduce(function(countObj, battery) {
    if (battery in countObj) {
        countObj[battery]++;
    } else {
        countObj[battery] = 1;
    }
    return countObj;
}, {});
*/

/* SECOND ATTEMPT: also passed first test
const totalBatteries = batteryBatches.reduce(function(accumulator, battery){
    return battery + accumulator}, {})
    */
   
/*THIRD ATTEMPT: Passed first 2 tests
 const initalValue = 4;
 const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, initalValue
); */

const initalValue = 0;
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator += currentValue, initalValue
); 

