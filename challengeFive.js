// First attempt 

let cardNumber = "";

function hideCardNumber(number){
    const cardNumberString = number.toString();
    const integers = cardNumberString.split("");
    
    for(let i = 0; i < integers.length - 4; i++) {
        integers[i] = "*";
        cardNumber += integers[i]
    }
   
    for(let i = integers.length - 4; i < integers.length; i++){
        cardNumber += integers[i]
    }
    console.log(cardNumber)
}


hideCardNumber(123838383848)



// second attempt 

let encryptedCardNumber = "";


function hideCardNumber(number) {
   const numberString = number.toString()
   const newNum = numberString.split('')


  const hideNumber = "*"
  const hidedenNum = hideNumber.repeat(newNum.length -4)
  encryptedCardNumber = hidedenNum
  
  for(let i = newNum.length -4; i < newNum.length; i++){
    encryptedCardNumber += newNum[i]
  }
  console.log(encryptedCardNumber)
}


hideCardNumber(12345678)