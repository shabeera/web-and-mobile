
let number = prompt("Generate table");

let res = getTable(number);
console.log(res);

function getTable(tNumber) {

    let tableData = "";

    for (let i = 1; i < 11; i++) {

        tableData += '\n'+ tNumber + " * " + i + " = " + (tNumber * i);

    }

    return tableData;


}

// document.write("hello g");


// let res = getNumber1(7) + getNumber1(4);
// console.log(res);

// console.log(a);

// let city = "Lahore"


// function getNumber1(a = 0) {

//     let city = "Faisalabad";

//     return a;
// }

// function getNumber2(b) {
//     return b;
// }
