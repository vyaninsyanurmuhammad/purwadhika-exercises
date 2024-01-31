// const triangleByheight = (height) => {

//     let triangelNumberList = [];

//     let sortNumber = 0;

//     for (let i = 0; i < height; i++) {

//         let triangelNumberLineList = [];

//         for (let j = 0; j <= i; j++) {
//             sortNumber++;
//             triangelNumberLineList.push(sortNumber);
//         }

//         triangelNumberList.push(triangelNumberLineList);

//     }

//     let lastLineTriangleList = triangelNumberList[triangelNumberList.length - 1];
//     let biggestLengthCharacterNumberTriangle = lastLineTriangleList[lastLineTriangleList.length - 1].toString().length;

//     triangelNumberList.forEach((triangleLineNumberList) => {
//         let triangle = "";

//         triangleLineNumberList.forEach((data) => {
//             if (!(data.toString().length === biggestLengthCharacterNumberTriangle)) {

//                 let zero = "";

//                 for (let index = data.toString().length; index < biggestLengthCharacterNumberTriangle; index++) {
//                     zero += "0";

//                 }

//                 triangle += `${zero}${data} `;
//             } else {
//                 triangle += `${data} `;

//             }
//         });

//         console.log(triangle);

//     });
// }

// triangleByheight(45);

const triangleByHeight = (height) => {
    const triangelNumberList = [];
    let sortNumber = 0;

    for (let i = 0; i < height; i++) {

        let triangelNumberLineList = [];

        for (let j = 0; j <= i; j++) {
            sortNumber++;
            triangelNumberLineList.push(sortNumber);
        }

        triangelNumberList.push(triangelNumberLineList);

    }

    const biggestLengthCharacterNumberTriangle = triangelNumberList[height - 1][height - 1].toString().length;

    triangelNumberList.forEach((triangleLineNumberList) => {
        const triangle = triangleLineNumberList
            .map((data) => data.toString().padStart(biggestLengthCharacterNumberTriangle, '0'))
            .join(' ');

        console.log(triangle);
    });
}

triangleByHeight(4);