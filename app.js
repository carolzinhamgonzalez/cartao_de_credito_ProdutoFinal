
var stringCard = prompt('Qual o número do seu cartão de crédito?');
  while (stringCard === ''){
    alert('Insira o número para validar');
    stringCard = prompt('Qual o número do seu cartão de crédito?');
  }

//function isValidCard (stringCard){
  var arrayCard = stringCard.split('');
  var numberCard = [];
    for (i = 0; i < arrayCard.length; i++){
      numberCard.push(parseInt(arrayCard[i]));
    }
  numberCard.reverse();
  for (var i = 1; i < numberCard.length; i = i + 2){
    var product = numberCard[i]*2;
    if (product > 9){
      var product2 = product - 9;
      numberCard[i] = product2;
    } else {
    numberCard[i] = product;
    }
  }

  var sumArray = 0;
  for (i = 0; i < numberCard.length; i++){
      sumArray += numberCard[i];
  }



var result = sumArray % 10;

if (result === 0) {
  document.write('Cartão de crédito válido!');
} else {
  document.write('Cartão de crédito INVÁLIDO');
}



//}

//isValidCard(stringCard);
