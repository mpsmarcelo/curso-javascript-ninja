/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayArgs = [1,'Marcelo', '1500,00', 'Golf'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
getArray(arrayArgs)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getIndiceArray(array, indice){
    return array[indice];
} // 

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayArgs = [1,'Marcelo',true, [1,3,5], { descricao : 'carro' , cor : 'vermelha' }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getArray(arrayArgs) // (5) [1, "Marcelo", true, Array(3), {…}]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
   var  livro = {
                nome : 'java 8',        composicao1 :  { quantidadePagnas :  50,  autor : 'Marcelo', editora :  'Abril'},
                nome : 'java efetivo',  composicao2 :  { quantidadePagnas :  150,  autor : 'Pedro', editora :  'Mundo java'},
                nome : 'java 12',       composicao3 :  { quantidadePagnas :  500,  autor : 'Java', editora :  'Conceito'}
                };
                     
         console.log(livro.composicao1);
     }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
