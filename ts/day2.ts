import { readInput } from './utils'

const pOneTable = {
    A: 1,
    B: 2,
    C: 3,
}

const pTwoTable = {
    X: 1,
    Y: 2,
    Z: 3,
}

function evaluateLineScore(line: string[]): number {
    const fpScore = pOneTable[line[0] as keyof typeof pOneTable]; 
    const spScore = pTwoTable[line[1] as keyof typeof pTwoTable]; 

    if (fpScore === spScore) {
        return 3 + spScore;
    } else if (fpScore < spScore) {
        return 6 + spScore;
    }

    return spScore;
}

(() => {
    let total = BigInt(0);

    readInput('../inputs/two').then((lines) => {
        lines.forEach(line => {
            total += BigInt(evaluateLineScore(line));
        });

        console.log(total);
    });
})();

