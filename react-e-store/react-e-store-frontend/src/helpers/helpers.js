// calculate the total price rounded to two decimals
// toFixed returns a string so we convert to a number
// discount amount is a % amount from redux

export function calculateCartTotal(products, cart) {
    let total = 0;
    for (let id in products) {
        const { price } = products[id];
        const quantity = cart[id] || 0;
        total += price * quantity;
    }
    return total.toFixed(2);
}

export function calculateTotalQuantity(cart) {
    let totalQuantity = 0;
    for (let id in cart) {
        totalQuantity += cart[id];
    }
    return totalQuantity;
}