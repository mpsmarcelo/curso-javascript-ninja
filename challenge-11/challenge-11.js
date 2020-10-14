// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
(function(){

var once = false;

do{

    console.log('Entrou ao menos uma vez!')
    
}while(once)



/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
person = {

        name : 'Marcelo Pereira',
        age  : 37,
        weigth : 1.8,
        brithday: '15/03/1983'        
        }


/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
for (var prop in person){
    console.log('The '+  prop + ' of person is '+ person[prop]);
}

/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/
function moreThan(idade){
    return  person.age > idade;
}

/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/

var numbers = [];
var cont = 0
while(cont < 20){
      
    if(cont > 10){
        break;
    }
    numbers.push(cont);  
    cont++;
}
console.log( 'De 0 a 10:' , numbers);  // De 0 a 10: (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var numbers= [];
var cont = 0;
do{

    if(cont >10){
      break;
    }
    numbers.push(cont);
    cont++;
    

}while(cont > 0);
console.log( 'De 0 a 10:' , numbers); // De 0 a 10: (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
var numbers= [];
var cont = 0;
while(cont++){

    if(cont > 20){
        break;
      }
 
    if(cont % 2 !==0){
         continue;
    }      
    numbers.push(cont);

}
console.log( 'Pares de 0 a 20:', numbers ); // Pares de 0 a 20: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

})();