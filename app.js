var stringCard = prompt('Qual o número do seu cartão de crédito?');
//dividir stringCard em um array de strings dos seus elementos;
var arrayCard = stringCard.split('');
console.log (arrayCard);
var numberCard = [];
for (i = 0; i < arrayCard.length; i++){
  numberCard.push(parseInt(arrayCard[i]));
}

console.log (numberCard);
