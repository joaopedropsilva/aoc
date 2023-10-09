import { readInput } from './utils'

function findMostCaloriesElf(buffer: string[][]): number {
    const numbers = buffer.map(item => parseInt(item[0]));

    let sum = 0;
    let biggerSum = 0;
    let lo = 0;
    for (let i = 0; i < numbers.length; ++i) {
        if (Number.isNaN(numbers[i])) {
            sum = numbers.slice(lo, i).reduce((partialSum, acc) => partialSum + acc, 0);
            lo = i + 1;
        }

        if (i === numbers.length - 1){
            sum = numbers.slice(lo, i + 1).reduce((partialSum, acc) => partialSum + acc, 0);

        }

        if (sum > biggerSum) {
            biggerSum = sum;
        }
    }

    return biggerSum;
}

(() => {
    readInput('../inputs/one').then((buffer) => {
        const result = findMostCaloriesElf(buffer) 
        console.log(result)
    });
})();


