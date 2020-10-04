/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Liga da lendas';
console.log(championship); //Liga da lendas

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Atletico MG', 'Internacional','Palmeiras','São Paulo','Vasco'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao){
   
return !posicao[--posicao] ? 'O time que está em posição ' + ++posicao + ' é o ' + teams[--posicao] : 'Não temos a informação do time que está nessa posição';

}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //"O time que está em posição 1 é o Atletico MG"
showTeamPosition(2); //"O time que está em posição 2 é o Internacional"
showTeamPosition(3); //"O time que está em posição 3 é o Palmeiras"
showTeamPosition(4); //"O time que está em posição 4 é o São Paulo"

teams.push('Flamengo')

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont = 19;
while(cont++ <30){
    console.log(cont);
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function converToHex(color){

var mensagem = `O hexadecimal para a cor  ${color} é `;   

switch(color){
        case 'red' :
        console.log(mensagem + '#FF0000');    
        break;

        case 'yellow' :
        console.log(mensagem + '#FFFF00');    
        break;

        case 'orange' :
        console.log(mensagem + '#FFA500');    
        break;

        case 'pink' :
        console.log(mensagem + '#FFC0CB');    
        break;

        case 'green' :
        console.log(mensagem + '#008000');    
        break;

        default : 
        console.log(`Não temos o equivalente hexadecimal para ${color}`);
        }
}


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
function converToHex(color){

var mensagem = `O hexadecimal para a cor  ${color} é `;   

switch(color){
        case 'red' :
        console.log(mensagem + '#FF0000');    
        break;

        case 'yellow' :
        console.log(mensagem + '#FFFF00');    
        break;

        case 'orange' :
        console.log(mensagem + '#FFA500');    
        break;

        case 'pink' :
        console.log(mensagem + '#FFC0CB');    
        break;

        case 'green' :
        console.log(mensagem + '#008000');    
        break;

        case 'chocolate' :
        console.log(mensagem + '#D2691E');    
        break;

        case 'lime' :
        console.log(mensagem + '#00FF00');    
        break;

        case 'blue' :
        console.log(mensagem + '#0000FF');    
        break;

        default : 
        console.log(`Não temos o equivalente hexadecimal para ${color}`);
        }
}