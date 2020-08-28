const Test = require('ava');
const {printOwing} = require('../src/print')

Test("case 1,should return __ when call printOwing", t => {
    let invoice = {
        customer: "big co",
        borderSpacing: [
            {amount: 1},
            {amount: 2},
            {amount: 3},
            {amount: 4},
        ],
        dueDate:null
    };
    let result = printOwing(invoice);
    const expertResult = `***********************\n`+
        `**** Customer Owes ****\n`+
        `***********************\n`+
        `name: big co\n`+
        `amount: 10\n`+
        `amount: 9/27/2020\n`;
    t.is(expertResult,result);
})