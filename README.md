# cartao_de_credito_ProdutoFinal
##Fluxograma
![Fluxograma cartao_de_credito_ProdutoFinal](C:\Users\carol\Downloads\Fluxograma Produto Cartão de Crédito.jpeg)
##Tarefas
  1. Solicitar número do cartão ao usuário: criar prompt;
  2. Usuário não pode deixar prompt vazio = while;
  3. Criar a função isValidCard;
###Manipular informação do prompt:
    1. Transformar a string fornecida no prompt em uma array = stringCard;
    2. Transformar a array de strings em uma array de números = numberCard.

###Validar se o número fornecido é de um cartão de crédito - Com algoritmo Luhn:
    1. Inverter a ordem da array numberCard;
    2. Executar o algoritmo Luhn = for para multiplicar os números em índices ímpares + for para somar a array inteira;
    3. Validar o número do cartão = result.
