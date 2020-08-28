function deliveryDate(anOrder, isRush) {
    let deliveryTime = 0;
    for (handler of deliveryDateHandlers) {
        deliveryTime = handler(anOrder, isRush, deliveryTime);
    }
    return deliveryTime;
}

const deliveryDateHandlers = [
    (anOrder, isRush, deliveryTime) => {
        return isRush ? 3 : deliveryTime;
    },
    (anOrder, isRush, deliveryTime) => {
        return (isRush && ['MA', 'CT'].includes(anOrder.deliveryState)) ? 1 : deliveryTime;
    },
    (anOrder, isRush, deliveryTime) => {
        return (isRush && ['NY', 'NH'].includes(anOrder.deliveryState)) ? 2 : deliveryTime;
    },
    (anOrder, isRush, deliveryTime) => {
        return (isRush) ? anOrder.placedOn.plusDays(1 + deliveryTime) : deliveryTime;
    },
    (anOrder, isRush, deliveryTime) => {
        return (!isRush) ? 4 : deliveryTime;
    },
    (anOrder, isRush, deliveryTime) => {
        return (!isRush && ['MA', 'CT', 'NY',].includes(anOrder.deliveryState)) ? 2 : deliveryTime;
    },
    (anOrder, isRush, deliveryTime) => {
        return (!isRush && ['ME', 'NH',].includes(anOrder.deliveryState)) ? 3 : deliveryTime;
    },
    (anOrder, isRush, deliveryTime) => {
        return (!isRush) ? anOrder.placedOn.plusDays(2 + deliveryTime) : deliveryTime;

    },
]

module.exports = {deliveryDate}
