
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
  
    return valueInDollar;
}
module.exports ={sum,fromEuroToDollar}

const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 156.5;
  
    return valueInYen;
}
module.exports ={sum,fromDollarToYen}

const YenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.87;
  
    return valueInPound;
}
module.exports ={sum,YenToPound}