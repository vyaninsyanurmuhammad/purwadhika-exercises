// give order

const addWhiteSpace = (value, manySpace) => {
    const splitedValue = value.split("");

    for (let l = splitedValue.length; l < manySpace; l++) {
        value += " ";
    }

    return value;
}

const limit = 10;

let multipleTable = []
for (let i = 1; i <= limit; i++) {

    let multiple = [];

    for (let j = 1; j <= limit; j++) {

        multiple.push({
            a: j,
            b: i,
            result: j * i
        });
    }
    multipleTable.push(multiple);
}

// const lastCornerTable = multipleTable[multipleTable.length - 1][0];

// const biggestStatementLengh = `${lastCornerTable.a} x ${lastCornerTable.b}`.length
// console.log(biggestStatementLengh);

let biggestStatementLenghList = [];

for (let index = 0; index < 10; index++) {
    const target = multipleTable[multipleTable.length - 1][index];
    biggestStatementLenghList.push(`${target.a} x ${target.b}`.length);

}

multipleTable.forEach((data) => {
    let multiple = "";


    data.forEach((target, index) => {
        let value = `${addWhiteSpace(`${target.a} x ${target.b}`, biggestStatementLenghList[index] )} = ${target.result}`;

        const newValue = addWhiteSpace(value, 17);

        multiple += newValue;
    })

    console.log(multiple);
})

// for (let i = 1; i <= 10; i++) {
//     let multiple = "";

//     for (let j = 1; j <= 10; j++) {

//         let value = `${j} X ${i}`;

//         const splitedvalueLengh = value.split("").length

//         value = addWhiteSpace(value, splitedvalueLengh + 1);

//         const result = j * i;
//         value += `= ${result}`;

//         value = addWhiteSpace(value, 15);

//         multiple += value;
//     }

//     console.log(multiple);

// }

