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