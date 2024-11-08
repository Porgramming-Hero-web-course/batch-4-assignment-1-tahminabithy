{
    const sumArray = (arr: number[]): number => {
        let sum: number = 0;
        arr.forEach(val => {
            sum = sum + val;
        });
        return sum;
    }

    const output = sumArray([1, 2, 3, 4, 5]);
    console.log(output);
}
