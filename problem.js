/** PROBLEM 1 START */

function newPrice(currentPrice, discount) {
    if(typeof(currentPrice) == "number" && typeof(discount) == "number"){
        let discountPrice = (currentPrice * discount) / 100;
        let finalPrice = currentPrice - discountPrice;
        let priceFloat = parseFloat(finalPrice).toFixed(3);
        return priceFloat ;

    }
   else{
    return "Invalid"
   }
}
  

/** PROBLEM 2 START */

function validOtp(otp) {
    if(typeof(otp) === "string"){
        let lenthOtp = otp.length;
        let startWith = otp.startsWith("ph")
        if(lenthOtp === 8 && startWith === true){
            return true ;
        }
        else{
            return false;
        }

    }
    else{ 
        return "Invalid";
    }
}


/** PROBLEM 3 START */

function finalScore(omr) {
    if(typeof(omr) === "object" && !Array.isArray(omr)){
        let right = omr.right;
        let wrong = omr.wrong;
        let skip = omr.skip;

        if((right + wrong + skip) === 100){
            let rightNumber = right * 1;
            let wrongNumber = wrong * 0.5;
            let skipNumber = skip * 0;
            let getNumber = (rightNumber + skipNumber) - wrongNumber ;
            let finalRoundedResult = Math.round(getNumber)
            return finalRoundedResult ;


        }
        else{
            return "Invalid"
        }

    }
    else{
        return "Invalid"
    }
}