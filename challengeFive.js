
function hideNumber(number){
  const cardNumber = number.toString();
  const hiddenNumber = "*".repeat(cardNumber.length - 4)
   return cardNumber.slice(- 4) + hiddenNumber
  
}


console.log(hideNumber(1234567893838))