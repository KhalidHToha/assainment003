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



/** PROBLEM 4 START */

function gonoVote(array) {
    if(Array.isArray(array)){
        let haVote = [];
        let naVote = [];
        for(vote of array){
            if(vote === "ha"){
                haVote.push(vote);
            }
            else if(vote === "na"){

                naVote.push(vote);
            }

        }
        let haVoteCount = haVote.length ;
        let naVoteCount = naVote.length ;
        if(haVoteCount > naVoteCount){
            return true ;
        }
        else if(haVoteCount === naVoteCount){
            return "equal" ;
        }
        else{
            return false ;
        }

    }
    else{
        return "Invalid"
    }
}

/** PROBLEM 5 START */