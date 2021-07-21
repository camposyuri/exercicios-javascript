// * Array -> Métodos modificadores (mutator methods)
// TODO: [].sort() modifica a array original.
const numeros = [3, 5, 8, 7, 24, 888, 946, 2522, 4, 2, 1];
// * Gerando uma cópia do array de numeros.
const ordernar = [...numeros].sort((a, b) => a - b);
console.log(ordernar);
console.log(numeros);

const gerarNumerosAleatorios = (min, max, array) => {
  if (min > max) {
    [max, min] = [min, max];
  }

  const aleatorio = +Math.floor(Math.random() * (max + 1 - min) + min);
  return array.includes(aleatorio)
    ? gerarNumerosAleatorios(min, max, array)
    : aleatorio;
};

const gerarQtdeNumeros = (qtde) => {
  const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumerosAleatorios(1, 7, nums);
      return [...nums, novoNumero];
    }, []);

  return [...numeros].sort((a, b) => a - b);
};

const r1 = gerarQtdeNumeros(6);
console.log(r1);

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
const p1 = comidas.shift();
console.log(p1);
const p2 = comidas.pop();
console.log(p2);
comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
const alfabetica = estudantes.sort();
console.log(alfabetica);
const inverterOrdem = estudantes.reverse();
console.log(inverterOrdem);
const verificarJoana = estudantes.includes("Joana");
console.log(verificarJoana);
const verificarJuliana = estudantes.includes("Juliana");
console.log(verificarJuliana);

const string = "aaa";
const arrayString = string.split(" ");
console.log(arrayString);
