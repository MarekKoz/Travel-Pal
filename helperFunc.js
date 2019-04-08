//-------------------- ARRAY METHODS
//Function we use to reduce the array of finance inputs and clothing amounts 
function getSum(total, num) {
    return total + num;
}
//Function that uses Arrays.reduce (FIRST OCCURANCE OF ARRAYS METHOD)
function financeTotals(financeMoney) {
    let financeTotalCash = financeMoney.reduce(getSum);
}

//Function to change currency from dollars 
function multiplyArrayElement(num) {
    return num * value;
}

//Function uses Arrays.map (SECOND OCCURANCE OF ARRAYS METHOD)
function financeNewCurrency(currencyMultiplier) { 
    let financeNewCurrency = currencyMultiplier.map(multiplyArrayElement(3));
}

//Function that uses Arrays.reduce (THIRD OCCURANCE OF ARRAYS METHOD)
function packingClothes(clothesAmounts){
    let clothingAmounts = clothesAmounts.reduce(getSum);
}
