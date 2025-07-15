
const { fromEuroToDollar, fromDollarToYen, fromYenToPound ,sum} = require('./app.js');

test('adds 14+9 to equal 23',() =>{
    let total = sum(14,9);

    expect(sum(14,9)).toBe(23);
});

console.log(sum(7,3))
// Import the functions

test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test("One dollar should be 146.26 yen", () => {
    // 1 USD → Euro: 1 / 1.07 = ~0.934579
    // Euro → JPY: 0.934579 * 156.5 = ~146.26
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});

test("One yen should be 0.00556 pounds", () => {
    // 1 YEN → Euro: 1 / 156.5 = ~0.00639
    // Euro → GBP: 0.00639 * 0.87 = ~0.00556
    expect(fromYenToPound(1)).toBeCloseTo(0.00556);
});