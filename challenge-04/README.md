# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
> var isTruthy = function(valor){
 return !!valor;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
> isTruthy();
false
> isTruthy('');
false
> isTruthy(0);
false
> isTruthy(-0);
false
> isTruthy(NaN);
false
> isTruthy(undefined);
false
> isTruthy(false);
false   

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
> isTruthy('M');
true
> isTruthy(1);
true
> isTruthy(-1);
true
> isTruthy(true);
true
> isTruthy(1 === 1);
true 
> isTruthy(2 > 1);
true
> isTruthy({});
true
> isTruthy([]);
true
> isTruthy(function(){});
true
> isTruthy(2 * 1);
true

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
 var carro = {
			 marca : 'Volks',
			 modelo : 'Sport-line',
			 placa : 'MM5-2311',
			 ano   : 2013,
			 cor : 'Branca',
			 quantasPortas : 5,
			 assentos : 5,
			 quantidadePessoas : 0
			 }

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
 function carro.mudarCor = function(cor){
 carro.cor = cor;
 }

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function carro.obterCor =  function(){
 return carro.cor;
 }

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
 function carro.obterMarca = function(){
 return carro.marca;
 }

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function carro.obterModelo = function(){
 return carro.modelo;
 }

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function carro.obterMarcaModelo = function(){
 return 'Esse carro é um ' + carro.obterMarca() + ' '+ carro.obterModelo();
 }

/* Criado metodo removerPessoa*/
function carro.removerPessoa  = function(quantidade){
  return  carro.quantidadePessoas -= quantidade; 
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function carro.adicionarPessoasNoCarro function(quantidade){
	var vagaDisponivel = carro.assentos - carro.quantidadePessoas;

	if(vagaDisponivel == 0){ return 'Carro já esta lotado!';}
    if(vagaDisponivel == 1 && quantidade > vagaDisponivel){ return 'Só cabe mais '+ vagaDisponivel + 'pessoa!';}
    if(vagaDisponivel > 0 && (vagaDisponivel - quantidade) < 0 )
    	{return  'So cabem mais ' + vagaDisponivel +' pessoas';}
    	else{carro.quantidadePessoas += quantidade;   return 'Já temos ' + carro.quantidadePessoas + ' no carro!';
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //"Branca"

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho'); //Vermelho

// E agora, qual a cor do carro?
"Vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde musgo'); //Verde musgo

// E agora, qual a cor do carro?
"Verde musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo() //""

// Adicione 2 pessoas no carro.
carro.adicionarPessoasNoCarro(2) //"Já temos 2 no carro!"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoasNoCarro(4) //"So cabem mais 3 pessoas"

// Faça o carro encher.
carro.adicionarPessoasNoCarro(3) //"Já temos 5 no carro!"

// Tire 4 pessoas do carro.
carro.removerPessoa(4); //1

// Adicione 10 pessoas no carro.
carro.adicionarPessoasNoCarro(10) //"So cabem mais 4 pessoas"

// Quantas pessoas temos no carro?
1
```
