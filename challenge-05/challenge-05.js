/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arrayArgs = [1,'Marcelo', '1500,00', 'Golf'];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arrayArgs){
    return arrayArgs;
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
function getIndiceArray(param, indice){ return param[indice];} // [1, 2, 3, 5]


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

    var objLivro = {
                    'Java efetivo': { quantidadePaginas : 50 , autor : 'Marcelo', editora : 'Mundo java'},
                    'Code clean'  : { quantidadePaginas : 150 , autor : 'Mario bob', editora : 'Java student'},
                    'Java 12'     : { quantidadePaginas : 500 , autor : 'Chaves', editora : 'Abril'}        
                   };

      return !nomeLivro ? objLivro : objLivro[nomeLivro];
   }
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Java efetivo';
'O ' + bookName +' tem ' +  book(bookName).quantidadePaginas + ' paginas'; //"O livro Java 12 tem 500 paginas"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = 'Java efetivo';
'O autor do ' + bookName + ' é ' +  book(bookName).autor;   //"O autor do livro Java 12 é Chaves"

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = 'Java efetivo';
'O livro ' + bookName + ' foi publicado pela editora ' +  book(bookName).editora; //"O livro Java 12 foi publicado pela editora Abril"
