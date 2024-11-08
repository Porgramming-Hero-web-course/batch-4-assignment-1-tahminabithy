"use strict";
{
    const sumArray = (arr) => {
        let sum = 0;
        arr.forEach(val => {
            sum = sum + val;
        });
        return sum;
    };
    const output = sumArray([1, 2, 3, 4, 5]);
    console.log(output);
}
