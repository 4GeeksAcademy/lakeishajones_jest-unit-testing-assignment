const sum =(a,b)=>{
    return a+b
}

console.log(sum(7,3))

module.exports ={sum};

// app.js

// Conversion rates
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
};

// Convert Euro to Dollar
const fromEuroToDollar = (euro) => euro * oneEuroIs.USD;

// Convert Dollar to Yen
const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
};

// Convert Yen to Pound
const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
};

// Export functions for testing
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound,sum };
