"use strict";
{
    const removeDuplicates = (arr) => {
        let uniqueArray = [];
        arr.forEach((value) => {
            for (let m = 0; m < arr.length; m++) {
                let isDuplicate = false;
                for (let n = 0; n < uniqueArray.length; n++) {
                    if (arr[m] = uniqueArray[n]) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    uniqueArray.push(arr[m]);
                }
            }
        });
        return uniqueArray;
    };
    const output = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(output);
}
