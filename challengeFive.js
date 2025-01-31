function hideNumber(number){
  const cardNumber = number.toString();
  const hiddenNumber = "*".repeat(cardNumber.length - 4)
   return  hiddenNumber + cardNumber.slice(- 4) 
 
}




console.log(hideNumber(1233838))