/*
Crie um array com 5 items (tipos variados).
*/
var myArray =  [1,'Descriçaõ', [1,2,3,4,5], { idade : 37, nome : 'Marcelo',null}, function soma(x, y){return x + y;}];  

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
 myArray.push(item);
 console.log(myArray);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var newArray = ['Novo array',{marca : 'Citroem', modelo : 'Sport'},[1,2,3,4]];
addItem(newArray);
// [1, "Descriçaõ", Array(5), {…}, ƒ, null, {…}, Array(3)]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+ myArray[7][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myArray[2].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
cont =9;
console.log( 'Números pares entre 10 e 20:' );
while(cont++ <=20){
(cont % 2) ==0 ? console.log(cont) : '';
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
cont =9;
console.log( 'Números ímpares entre 10 e 20:' );
while(cont++ <=20){
(cont % 2) ==0 ? '' : console.log(cont);
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(cont = 99; cont <=200; cont++){
(cont % 2) === 0 ? console.log(cont) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for(cont = 111; cont <=125; cont++){
(cont % 2) === 0 ? '' : console.log(cont);
}