// Function Expression -> com retorno implicito
const cumprimentar = (nome) => `Olá, ${nome}!`;
console.log(cumprimentar("Yuri"));

// Function Expression -> com retorno implicito
const converterIdadeEmAnosParaDias = (idadeEmAnos) => idadeEmAnos * 365;
console.log(converterIdadeEmAnosParaDias(70));

// Function declaration -> passando uma função como parâmetro para outra função
function calcularSalario(qtdeHorasTra) {
  return function (qtdePorHora) {
    const salarioBruto = qtdeHorasTra * qtdePorHora;
    const salarioLiquido = salarioBruto - (salarioBruto * 30) / 100;
    return `Salário igual a R$ ${salarioLiquido}`;
  };
}
console.log(calcularSalario(180)(60));

function receberNomeDoMes(numero) {
  const mapeamento = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ];

  return mapeamento[--numero];
}

console.log(receberNomeDoMes(1));

function maiorOuIgual(num1, num2) {
  return num1 > num2 || num1 === num2 ? true : false;
}

console.log(maiorOuIgual(1, 2)); // false
console.log(maiorOuIgual(1, 0)); // true
console.log(maiorOuIgual(2, 2)); // true
console.log(maiorOuIgual(1, "1")); // false
console.log(maiorOuIgual(5, 1)); // true
