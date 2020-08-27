const rankTest = require('ava');
const {voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating} = require('../src/rank')

rankTest('case 1, test for hasChina should be true', t => {
    let china = hasChina(history);
    t.is(true, china)
})

rankTest('case 2, test for hasChina should be false', t => {
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    let china = hasChina(history);
    t.is(false, china)
})

rankTest('case 3,test for captainHistoryRisk should be 6', t=>{
    let result = captainHistoryRisk(voyage, history);
    t.is(6, result)
})

rankTest('case 4,test for captainHistoryRisk should be 2', t=>{
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-brains',
            profit: 9,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'east-brains',
            profit: 17,
        }
    ];
    let result = captainHistoryRisk(voyage, history);
    t.is(2, result)
})

rankTest('case 5,test for voyageProfitFactor should be 6', t=>{
    const voyage = {
        zone: 'china',
        length: 12,
    };
    let result = voyageProfitFactor(voyage, history);
    t.is(6, result)
})

rankTest('case 6,test for voyageProfitFactor should be 7', t=>{
    const voyage = {
        zone: 'china',
        length: 13,
    };
    let result = voyageProfitFactor(voyage, history);
    t.is(7, result)
})

rankTest('case 7,test for voyageProfitFactor should be 6', t=>{
    const voyage = {
        zone: 'china',
        length: 19,
    };
    let result = voyageProfitFactor(voyage, history);
    t.is(6, result)
})

rankTest('case 8,test for voyageProfitFactor should be 7', t=>{
    const voyage = {
        zone: 'china',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(7, result)
})

rankTest('case 9,test for voyageRisk should be 5', t=>{
    const voyage = {
        zone: 'china',
        length: 4,
    };
    let result = voyageRisk(voyage);
    t.is(5, result)
})

rankTest('case 9,test for voyageRisk should be 7', t=>{
    const voyage = {
        zone: 'china',
        length: 8,
    };
    let result = voyageRisk(voyage);
    t.is(7, result)
})

rankTest('case 9,test for voyageRisk should be 8', t=>{
    const voyage = {
        zone: 'china',
        length: 9,
    };
    let result = voyageRisk(voyage);
    t.is(8, result)
})

rankTest('case 9,test for voyageRisk should be 8', t=>{
    const voyage = {
        zone: 'west-africa',
        length: 9,
    };
    let result = voyageRisk(voyage);
    t.is(4, result)
})

const history = [
    {
        zone: 'east-indies',
        profit: 5,
    }, {
        zone: 'west-indies',
        profit: 15,
    }, {
        zone: 'china',
        profit: -2,
    },
    {
        zone: 'west-africa',
        profit: 7,
    },
];
const voyage = {
    zone: 'west-indies',
    length: 10,
};