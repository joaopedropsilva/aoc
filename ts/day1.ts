function findMostCaloriesElf(buffer) {
    // Split buffer at newline
    //

    buffer = `189
    240

    133
    10`;

    const char_split = buffer.split("");

    console.log(buffer)

    const numbers = [];
    let number;

    for (let i = 0; i < char_split.length; ++i) {
        if (char_split[i] !== '\n') {
            number += char;
        } else if (char_split[i] === '\n' && number !== "") {
            numbers.push(parseInt(number));
            number = "";
        }
    }


    numbers.forEach(number => {
        console.log(number, '->', (typeof number))
    })
    // Sum at each split  
    // Add to most calories elf if it's greater than the last one
    // Increment check which elf is 
    // Return most calories elf
}

