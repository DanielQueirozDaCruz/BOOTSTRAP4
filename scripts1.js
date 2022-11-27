//function expression
//function anonymous
/*
// parâmetros da função (parameters)
const sum = function(number1, number2){
		total = number1, number2
		return total
}

sum(2, 3)//arguments
sum(50,50)
sum(50,1,00000000000000)


let number1 = 21
let number2 = 22

sum(number1,number2)
console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

//Função é um liquidificador
function fazerSuco(fruta1, fruta2){
	return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'abacate')	

console.log(copo)

function ganharDinheiro(trabalhar, persistir){//parameters function
	return trabalhar, persistir
}

const caneca = ganharDinheiro('notasdecem, notasdeduzentos')//argumentos da função
console.log(ganharDinheiro)
*/


//////function scope/////////////
/*
let subject
function createThink(subject){
	subject = 'magali'
	return subject
}
console.log(subject)
console.log(createThink())
console.log(subject)
*/
//function hoisting
/*
sayMyName()//executei antes de criar a função, mas sofreu hosting (elevação da criação da função por baixo dos panos )
function sayMyName(){
	console.log(sayMyName)
}
*/

//arrow function
/*
const sayMyName = () => {
	console.log('Daniel')
}  
sayMyName()

/////// pode ser assim também	

const sayMyName = (name) => {
	console.log(name)
}  
sayMyName('Daniel')
*/

//callback function
/*
function sayMyName(name){
	console.log('antes de executar a funcao')
	name()
	console.log('depois de executar a funcao')
}
sayMyName(
	() => {
		console.log('estou em uma callback')
	}
)
*/

/*
prototype


*prototype-based language
*prototype chain
*__proto__
*/

/*
	Type conversion (typecasting) vs Type coersion

	*Ateração de um tipo de dado apra outro tipo de dado
*/
//console.log(Number('9') + 4)//type conversion
//console.log('9' + 3)//type coersion

/////manipulando Strings e Números 

//Transformar String em Número e Número em String
/*
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/


// Contar qiantos caracteres tem uma palavra e quantos dígitos tem um número
/*
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/


//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
//let number = 123.5454564854
//console.log(number.toFixed(2).replace(".", ","))


//Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
//let word = "Programar é muito bacana"
//console.log(word.toUpperCase())//Tudo em maiúsculo
//console.log(word.toLowerCase())//Tudo em minúsculo


//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque_
//let phrase  = "Eu quero  viver o Amor!"
//let myArray = phrase.split("")
//let phrasewithUnderscore = myArray.join("_")
//console.log(phrasewithUnderscore.toLocaleUpperCase())


//Verificar se o texto contém a palavra Amor
/*
let phrase = "Eu quero viver"
console.log(phrase.includes("Amor"))//false
let phrase1 = "Eu quero viver o Amor"
console.log(phrase1.includes("Amor"))
*/

////////Manipulando Arrays//////////

//Criar array com construtor
//let myArray = new Array('a', 'b', 'c')//Jeito constutor
//let myArray = ['a', 'b' , 'c']// Jeitonormal
//console.log(myArray)


//Contar elementos de um Array
/*
console.log(["a", {type: "Array"}, function(){
	return "suave"
}].length)//3elementos mo array
console.log(["a", {type: "Array"}, function(){
	return "suave"
}][2]())//3elementos mo array//fui até o elemento 2 e executei ele
*/


//Transformar uma cadeia de caracteres em elementos de um array
//let word = "manipulação"
//console.log(Array.from(word))//cada letra virou um elemento do array


//let techs = ["html" , "css", "js"]

//adicionar um item no fim
//techs.push("nodejs")
//adicionar no começo
//techs.unshift("sql")
//remover do fim
//techs.pop() 
//remover do começo
//techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))

//remover 1 ou mais items em qualquer posição do array
//techs.splice(0,1)
//encontrar a posição de um elemento no array  
//let index = techs.indexOf('css')
//techs.splice(index, 1)

//console.log(index)


/*
Expressões e operadores

-Expressions
-Operators
	Binary
	Unary
	Ternary


let number = 1//Expressões
console.log(number + 1)//Binary
console.log(++number)//Unary
console.log(true ? 'alo' : 'nada')
*/


/*
	new

	* left-hand-side expression
	*criar umnovo objeto


let name = new String('Daniel')
let age = new Number(21)
let date = new Date('2022-11-26')
console.log(name, age)
console.log(date)
*/


/*
	Operadores unários
	typeof
	delete

const person = {
	name: "Daniel",
	age: 21
}

delete person.name
console.log(person)
*/


//Operadores aritiméticos

//multiplicaçao *
//console.log(15 * 15)

//divisão /
//console.log(10 / 2)

//soma +
//console.log(50 + 50)

//subtração -
//console.log(50 - 25)

//resto da divisão %
//let remainder
//remainder = 11 % 9//sobra da divisão de 11 pra 9 ai sobrou 2
//console.log(remainder

/*
//incremento ++
let increment = 0
increment++//sempre incrementa 1//começa com 1
console.log(increment)
//decremento --
let decrement = 0
console.log(--decrement)
//exponencial **
console.log(2 ** 2)//elevado
*/


//Grouping operator ()
//let total = (2+3)*5
//console.log(total)


//Operadores de comaparação

//Irá comparar valores e retornar um Boolean como resposta à comparação

//let one = 1
//let two = 2

	//= recebimento/ == é igual 

// == igual a
//console.log(two == 1)
//console.log(one == "1")

//!= diferente de
//console.log(one != two)
//console.log(one != 1)
//console.log(one != "1")


// === estritamente igual a
//console.log(one === "1")
//console.log(one === 1)

//!== estritamente diferente de
//console.log(two !== "2")
//console.log(two !== 2)


//let one = 1

//let two = 2

//> maior que
//console.log(one > two)

//>= maior igual a
//console.log(one >= 1)
//console.log(two >= 1)

// < menor que 
//console.log(one < two)

//<= menor igual a
//console.log(one <= two)
//console.log(one <= 1)
//console.log(one <= 0)


//Operadores de atribuição (Assignment)
//let x
//console.log(x)

//assignment
//x = 1

//addtion assignment
//x = x + 2
//x += 2
//console.log(x)

//subtraction assignment
//x = x - 1
//x -= 1

//multiplication assisgnment
//x = x * 2
//x *= 2

//division assignment
// x = x / 2
// /= 2

//remainder, exponetiation
//x %= 2
//console.log(x)
//x **= 2


/////Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verifiados,
// resultará em verdadeiro ou falso

//let pao = true
//let queijo = true

//AND &&
//console.log(pao && queijo)

//OR || / (ou)
//console.log(paó || queijo)

//NOT ! // ! sempre vai estar negando o valor 
//console.log()


/////Operador Condicional (Ternário)

//Dependendo da condiçao,nós recebemos valores diferentes

//Condição então valor 1 se não valor 2
//condition ? value1 :value2

//Exemplos

//Café da manha manhã top 
//let pao = true
//let queijo = false

//const niceBreakFast = pao && queijo ? 'Café top' : 'Café ruim'// se o pao e o queijo for true vai ser café top

//const niceBreakFast = pao || queijo ? 'Café top' : 'Café ruim'//se tiver so o pao ou so o café vai ser café top também 
//console.log(niceBreakFast)

//maior de 18
//let age = 16
//const canDrive = age >= 16 ? 'can drive' : "can't drive"


//////////Operador de String (String operator)

//comparison (comparação)
//console.log('a' == 'a')

//conatenation (concatenação)
//Retorna a união de duas Strings
//let alpha = 'alpha'
//console.log(alpha + 'bet')
//console.log(alpha += 'bet')


/*
	FALSY
	Quando um valor é considerado false em contextos onde o booleano é obrigatório
	( condições e loops )

	FALSE
	0
	=0
	""
	null
	undefined
	NaN
*/
//console.log("" ? 'verdadeiro' : 'falso')

/*
	TRUTHY
	Quando um valor é considerado true em contextos onde um booleano é obrigarório ( condicionais e loops )

	true
	{}
	[]
	1
	3.23
	"0"
	"false"
	-1
	Infinity
	-Infinity

	//console.log({} ? 'verdadeiro' : 'falso')


	/*
		Operator precedence 
			Precedência de operadores

	*grouping                     	()
	*negação e incremento			! ++ --
	*multiplicação e divisão		* /
	*adição subtração				+ - 
	*relacional						< <= > >=c
	*igualdade						== != === !==
	*AND							&&
	*OR								||
	*condecional					?:	
	*assignment (atribuição)		= += -= *=
*/


/////////if...else


//if = se / else = se não

//let temperatura = 38

/*
if(temperatura >= 37){
	console.log('febre')
}
else{
	console.log('saudável')
}


if(temperatura >= 37.5){
	console.log('febre alta')
}
else if(temperatura < 37.5 && temperatura >= 37){
	console.loh('febre moderada')
}
else{
	console.log('saudável')
}


let temperature	= 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(highTemperature){
	console.log('febre alta')
}
else if(=mediumTemperature){
	console.loh('febre moderada')
}
else{
	console.log('saudável')
}
*/

////switch

/*
let expression = 'a'

switch(expression){
	case 'a':
		console.log('a')
		break
	case 'b':
		console.log('b')
		break
		default:
		console.log('default')
		break
}

function calculate(number1, operator, number2){
	let result

	switch (operator){
		case '+':
			result = number1 + number2
			break
		case '-':
			result = number1 - number2
			break
		case '*':
			result = number1 * number2
			break
		case '/':
			result = number1 / number2
			break
		default:
			console.log('nao implementado')
			break				
	}

	return result
}


console.log(calculate(4, '*',8 ))
*/



/////throw
/*
function sayMyName(name = ''){
	if (name = ''){
		throw 'nome é obrigatório'
	}
	console.log('depois do erro')
}

////try...catch
try{
	sayMyName()
}
catch(e){
	console.log(e)
}

function sayMyName(name = ''){
	if (name = ''){
		throw 'nome é obrigatório'
	}
	console.log(name)
}

////try...catch
try{//tenta rodar o codigo/se nao rodar vai pro cacth
	sayMyName('Daniel')
}
catch(e){//captura o erro e nao trava a aplicaçaõ
	console.log(e)
}

console.log('após ao try/catch')
*/


////Estrutura de repetição
//for
//break - para a execução do loop
//continue - pula a execução do momento
/*
for(let i = 10; i> 0; i--){// (for) quer dizer (para)
	if(i === 5){
		continue;
	}
	console.log(i)
}  	

for(let i = 100; i> 0; i--){// (for) quer dizer (para)
	if(i === 50){
		break;
	}
	console.log(i)
}
*/


////while = (enquanto) / (quando usar o while) = quando nao sabe o momento da parada
//let i = 0
//while (i < 10){
	//console.log(i)
	//i++;
//}


//for...of
/*
let name = 'Daniel'
let names = ['joao', 'paulo', 'pedro']

for(let name of names){
	console.log(name)
}

let name = 'Daniel'
let names = ['joao', 'paulo', 'pedro']

for(let char of name){
	console.log(char)
}
*/


///////for...in

/*
let person = {
	name:'Daniel',
	age:21,
	weight:88.6
}

for(let property in person)//no objeto person pegue a property(propriedade) e atrubua a variavel let
console.log(property)
console.log(person['name'])
console.log(person[property])
*/