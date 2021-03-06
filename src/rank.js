function voyageRisk(voyage) {
    let result = 1;
    if(voyage.length > 8){
        result += voyage.length - 6;
    }else if(voyage.length > 4){
        result += 2;
    }
    if ([
        'china',
        'east-indies',
    ].includes(voyage.zone)) {
        result += 4;
    }
    return result;
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) {
        result += 4;
    }
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === 'china' && hasChina(history)) {
        result -= 2;
    }
    return Math.max(result, 0);
}

const calculateProfitWhenHistoryHaveChina = (result, history, voyage) => {
    result += 3;
    if (history.length > 10) {
        result += 1;
    }
    if (voyage.length > 12 && voyage.length <= 18) {
        result += 1;
    }
    return result;
}

function calculateProfitWhenHistoryNotHaveChina(result, history) {
    if (history.length > 8 && history.length <=14) {
        result += 1;
    }
    return result;
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === 'china'||voyage.zone === 'east-indies') {
        result += 1;
    }
    if (voyage.zone === 'china' && hasChina(history)) {
        result = calculateProfitWhenHistoryHaveChina(result, history, voyage);
    } else {
        result = calculateProfitWhenHistoryNotHaveChina(result, history);
    }
    return result;
}

function calculateRate(vpf, vr, chr) {
    if (vpf * 3 > (vr + chr * 2)) {
        return 'A';
    } else {
        return 'B';
    }
}

function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    return calculateRate(vpf, vr, chr);
}

module.exports = {
    voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating
};

const voyage = {
    zone: 'west-indies',
    length: 10,
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
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
