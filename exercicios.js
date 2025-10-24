// treino dos exercicios;

// 01 Leia um número e mostre o dobro dele;
let s1 = 10;
let dobro = s1 + s1;
console.log("A Soma de " + s1 + "+" + s1 + " é: " + dobro);



// 02 Leia dois números e mostre a soma;
let c1 = 15;
let c2 = 10;
let somac12 = c1 + c2;
console.log("A soma de " + c1 + "+" + c2 + " é:" + somac12);



// 03 leia dois numeros e mostre a subtraçao;
var numero1 = 50;
var numero2 = 10;
var resultado = numero1 - numero2
console.log("O Resultado de: " + numero1 + " - " + numero2 + " é = " + resultado);




//  04 Leia dois números e mostre a multiplicação;
var numero = numero1;
var numero = numero2;
var resultado2 = numero1 * numero2;
console.log("O Resultado de: " + numero1 + "x" + numero2 + " é = " + resultado2);




// 05 Leia dois números e mostre a divisão;
var numero = numero1;
var numero = numero2;
var resultado3 = numero1 / numero2;
console.log("O Resultado de: " + numero1 + "/" + numero2 + " é = " + resultado3);




// 06 Leia dois números e mostre o maior deles.
var numero = numero1;
var numero = numero2;
if (numero1 > numero2) {
  console.log(numero1 + " É o Maior Número.");
} else if (numero2 > numero1) {
  console.log(numero2 + " É o Maior Número.");
} else {
  console.log("Os Dois Números São Iguais.");
}




// 07 Leia dois números e mostre o menor deles
var numero10 = 25;
var numero11 = 15;

if (numero10 < numero11) {
  console.log("e o Menor Número" + numero10);
} else if (numero11 < numero10) {
  console.log(numero11 + " É o Menor Número");
} else {
  console.log("Os 2 São Iguais");
}




// 08 Leia três números e mostre o maior;
var numero10 = 25;
var numero11 = 15;
var numero12 = 35;
var maiorNumero = Math.max(numero10, numero11, numero12);
console.log("O Maior Número é " + maiorNumero);




// 09 Leia três números e mostre o menor;
var numero10 = 25;
var numero11 = 15;
var numero12 = 35;
var menorNumero = Math.min(numero10, numero11, numero12);
console.log("O Menor Número é " + menorNumero);




// 10 Leia um número e informe se ele é par ou ímpar;
let numer = 8;
if (numer % 2 === 0) {
  console.log("${numer} é PAR");
} else {
  console.log("${numer} é ÍMPAR");
}




// 11 Calcule a média entre três números;
let n1 = 7;
let n2 = 5;
let n3 = 6;
let media = (n1 + n2 + n3) / 3;
console.log("A Media Entre " + n1 + "," + n2 + "," + n3 + " é:" + media);




// 12 Calcule o quadrado de um número;
let p1 = 7;
let quadrado = p1 * p1;
console.log("O Quadrado De 7 é: " + quadrado);




// 13 Calcule a raiz quadrada de um número;
let v1 = 10;
let raiz = v1 * v1;
console.log("A raiz quadrada de 10 é: " + v1);




// 14 Calcule o perímetro de um círculo;
let raio = 2;
let perimetro = 2 * Math.PI * raio;
console.log("O Valor Do Perimetro é: " + perimetro + " m2");




// 15 Calcule a área de um triângulo;
let base = 2
let altura = 10
let area = (base * altura) / 2;
console.log("A Área do Triângulo e: " + area);



// 16 Calcule a área de um retângulo;
let base3 = 3;
let altura3 = 6;
let area3 = base3 * altura3;
console.log("A Área do Retângulo é:" + area3);




// 17 Calcule o volume de um cubo;
let volume = 2;
let lado = 10;// lado do cubo;
let total3 = lado * lado * lado;
console.log("O Volume do Cubo é: " + total3);



// 18 Calcule o volume de uma esfera;
let raio5 = 2;
let volume2 = (4 / 3) * Math.PI * (raio ** 3);
console.log("O Volume da Esfera é: " + volume2);



// 19 Converta graus Celsius para Fahrenheit;
let Celsius = 37;
let Fahrenheit = (Celsius*9/5)+32;
console.log("O Valor de "+Celsius+"°C em fahrenheit é: "+Fahrenheit+"°F");



// 20 Converta quilômetros em milhas;
let km = 12;
let milhas = km * 0.621371;
console.log("A distância de "+km+"km em milhas é: "+milhas);



// 21 Calcule o valor de um produto com 10% de desconto;
let price = 200;
let priceDesconto = price *0.90;
console.log("O Valor do Produto com 10% de desconto é: "+ priceDesconto);




// 22 Calcule o valor de um produto com 15% de acréscimo;
let precoAcrescimo = price * 1.15;
console.log("o Preço do Produto com 15% de acréscimo é: "+precoAcrescimo);



// 23 Calcule o salário líquido com base em salário bruto e desconto de 8%.
let salarioB = 4500
let salarioL = salarioB *0.92;
console.log("O Salário liquido com desconto de 8% é: "+ salarioL+"R$");



