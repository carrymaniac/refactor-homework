const Test = require('ava');
const {deliveryDate} = require('../src/delivery')
Test('case 01, should return 10002 when call deliveryDate given MA and True',t=>{
    let anOrder = {
        deliveryState:'MA',
        placedOn: {
            plusDays:(num)=>{return num+10000}
        }
    }
    let result = deliveryDate(anOrder,true);
    t.is(10002,result)
})

Test('case 02, should return 10003 when call deliveryDate given NY and True',t=>{
    let anOrder = {
        deliveryState:'NY',
        placedOn: {
            plusDays:(num)=>{return num+10000}
        }
    }
    let result = deliveryDate(anOrder,true);
    t.is(10003,result)
})

Test('case 03, should return 10004 when call deliveryDate given WWW and True',t=>{
    let anOrder = {
        deliveryState:'WWW',
        placedOn: {
            plusDays:(num)=>{return num+10000}
        }
    }
    let result = deliveryDate(anOrder,true);
    t.is(10004,result)
})

Test('case 04, should return 10004 when call deliveryDate given MA and false',t=>{
    let anOrder = {
        deliveryState:'MA',
        placedOn: {
            plusDays:(num)=>{return num+10000}
        }
    }
    let result = deliveryDate(anOrder,false);
    t.is(10004,result)
})

Test('case 05, should return 10005 when call deliveryDate given MA and false',t=>{
    let anOrder = {
        deliveryState:'ME',
        placedOn: {
            plusDays:(num)=>{return num+10000}
        }
    }
    let result = deliveryDate(anOrder,false);
    t.is(10005,result)
})

Test('case 06, should return 10006 when call deliveryDate given MA and false',t=>{
    let anOrder = {
        deliveryState:'WWW',
        placedOn: {
            plusDays:(num)=>{return num+10000}
        }
    }
    let result = deliveryDate(anOrder,false);
    t.is(10006,result)
})