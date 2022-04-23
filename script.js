function calcularMedia( notas ) {
  let soma = 0;
  for( c = 0; c < notas.length; c++) {
      soma += notas[c];
  }
  media = soma / notas.length;
  return media;
}
let media; // escopo global
function aprovacao( notas ) {
  let media = calcularMedia( notas ); // escopo da função
  let condicao = media >= 8 ? "aprovado" : "reprovado";
  return 'Média: ' + media + ' - Resultado: ' + condicao;
}
function contagemRegressiva(numero){
  console.log(numero);  
  let proximoNumero = numero - 1;
  if(proximoNumero > 0)
      contagemRegressiva(proximoNumero);
}
document.addEventListener('submit', function( evento ){
  evento.preventDefault();
  evento.stopPropagation();
  let formulario = document.getElementById('formulario-01');
  let dados = new FormData(formulario);
  let objeto = {};
  let notas = [];
  for(let key of dados.keys()) {
      objeto[key] = dados.get(key);
      notas.push( parseInt(dados.get(key)));
}
  console.log(notas);
  console.log(objeto);
  texto = aprovacao(notas)
  document.getElementById('resultado').innerHTML = texto;
});
function somar1() 
          { 
          let num1 = 10;
          let num2 = 15;
          let somar1 = num1 + num2
          document.getElementById(
            "resultado1").innerHTML = somar1;
          }
function somar2() 
        { 
          let num1 = "10";
          let num2 = 2;
          let somar2 = num1 + num2
          document.getElementById(
            "resultado2").innerHTML = somar2;
          }
function multiplicar1() 
        { 
          let num1 = "10";
          let num2 = 2;
          let multiplicar1 = num1 * num2
          document.getElementById(
            "resultado3").innerHTML = multiplicar1;
          }
function dividir1() 
        { 
          let num1 = "10";
          let num2 = 3;
          let dividir1 = num1 / num2
          document.getElementById(
            "resultado4").innerHTML = dividir1;
          }
function restoDivisao() 
        { 
          let num1 = "10";
          let num2 = 3;
          let restoDivisao = num1 % num2
          document.getElementById(
            "resultado5").innerHTML = restoDivisao;
          }
function somar3() 
        { 
          let num1 = 10;
          let num2 = true;
          let somar3 = num1 + num2
          document.getElementById(
            "resultado6").innerHTML = somar3;
          }
function igualdadeValor() 
        { 
          let num1 = 10;
          let num2 = "10";
          let igualdadeValor = num1 == num2
          document.getElementById(
            "resultado7").innerHTML = igualdadeValor;
          }
function igualdadeTipo() 
        { 
          let num1 = 10;
          let num2 = "10";
          let igualdadeTipo = num1 === num2
          document.getElementById(
            "resultado8").innerHTML = igualdadeTipo;
          }
function menorQue() 
        { 
          let num1 = 10;
          let num2 = 11;
          let menorQue = num1 < num2
          document.getElementById(
            "resultado9").innerHTML = menorQue;
          }
function maiorQue1() 
        { 
          let num1 = 10;
          let num2 = 11;
          let maiorQue1 = num1 > num2
          document.getElementById(
            "resultado10").innerHTML = maiorQue1;
          }
function menorIgual() 
        { 
          let num1 = 10;
          let num2 = 10.1;
          let menorIgual = num1 <= num2
          document.getElementById(
            "resultado11").innerHTML = menorIgual;
          }
function maiorQue2() 
        { 
          let num1 = 10;
          let num2 = 9.99;
          let maiorQue2 = num1 > num2
          document.getElementById(
            "resultado12").innerHTML = maiorQue2;
          }
function diferencaSentenca() 
        { 
          let num1 = 10;
          let num2 = "dez";
          let diferencaSentenca = num1 != num2
          document.getElementById(
            "resultado13").innerHTML = diferencaSentenca;
          }
function somar4() 
        { 
          let num1 = 10;
          let num2 = true;
          let somar4 = num1 + num2
          document.getElementById(
            "resultado14").innerHTML = somar4;
          }
function somar5() 
        { 
          let num1 = "dez";
          let num2 = true;
          let somar5 = num1 + num2
          document.getElementById(
            "resultado15").innerHTML = somar5;
          }
function somar6() 
        { 
          let num1 = 10;
          let num2 = false;
          let somar6 = num1 + num2
          document.getElementById(
            "resultado16").innerHTML = somar6;
          }
function somar7() 
        { 
          let num1 = 10;
          let num2 = false;
          let somar7 = num1 * num2
          document.getElementById(
            "resultado17").innerHTML = somar7;
          }
function somar8() 
        { 
          let num1 = true;
          let num2 = true;
          let somar8 = num1 + num2
          document.getElementById(
            "resultado18").innerHTML = somar8;
          }
function incremento() 
        { 
          let num1 = 10;
          let incremento = ++num1
          document.getElementById(
            "resultado19").innerHTML = incremento;
          }
function decremento() 
        { 
          let num1 = 10;
          let decremento = --num1
          document.getElementById(
            "resultado20").innerHTML = decremento;
          }
function and1() 
        { 
          let num1 = 1;
          let num2 = 1;
          let and1 = num1 & num2
          document.getElementById(
            "resultado21").innerHTML = and1;
          }
function and2() 
        { 
          let num1 = 1;
          let num2 = 0;
          let and2 = num1 & num2
          document.getElementById(
            "resultado22").innerHTML = and2;
          }
function and3() 
        { 
          let num1 = 0;
          let num2 = 0;
          let and3 = num1 & num2
          document.getElementById(
            "resultado23").innerHTML = and3;
          }
function and4() 
        { 
          let num1 = 0;
          let num2 = 1;
          let and4 = num1 & num2
          document.getElementById(
            "resultado24").innerHTML = and4;
          }
function dividir2() 
        { 
          let num1 = 0;
          let num2 = 1;
          let dividir2 = num1 / num2
          document.getElementById(
            "resultado25").innerHTML = dividir2;
          }
function somarIgualdade1() 
        { 
          let num1 = 5;
          let num2 = 5;
          let num3 = 10;
          let somarIgualdade1 = num1 + num2 == num3
          document.getElementById(
            "resultado26").innerHTML = somarIgualdade1;
          }
function somarIgualdade2() 
        { 
          let num1 = "5";
          let num2 = "5";
          let num3 = 10;
          let somarIgualdade2 = num1 + num2 == num3
          document.getElementById(
            "resultado27").innerHTML = somarIgualdade2;
          }
function multiplicarMaior() 
        { 
          let num1 = "5";
          let num2 = 2;
          let num3 = 9;
          let multiplicarMaior = num1 * num2 > num3
          document.getElementById(
            "resultado28").innerHTML = multiplicarMaior;
          }
function somarMultiplicar1() 
        { 
          let num1 = 10;
          let num2 = 10;
          let num3 = 2;
          let somarMultiplicar1 = (num1 + num2) * num3
          document.getElementById(
            "resultado29").innerHTML = somarMultiplicar1;
          }
function somarMultiplicar2() 
        { 
          let num1 = 10;
          let num2 = 10;
          let num3 = 2;
          let somarMultiplicar2 = num1 + num2 * num3
          document.getElementById(
            "resultado30").innerHTML = somarMultiplicar2;
          }
function comparacao1() 
        { 
          let branco = "preto";
          let comparacao1 = branco == "branco";
          document.getElementById(
            "resposta1").innerHTML = comparacao1;
          }
function comparacao2() 
        { 
          let preto = "cinza";
          let comparacao2 = preto == "cinza";
          document.getElementById(
            "resposta2").innerHTML = comparacao2;
          }
function comparacao3() 
        { 
          let cinza = "branco";
          let carro = "branco";
          let comparacao3 = carro === cinza;
          document.getElementById(
            "resposta3").innerHTML = comparacao3;
          }
function comparacao4() 
        { 
          let carro = "preto";
          let cavalo = "carro";
          let comparacao3 = cavalo == carro ? "preto" : "marron";
          document.getElementById(
            "resposta4").innerHTML = comparacao3;
          }
function operacao1() 
          { 
          let valor = 30000;
          let entrada = 3000;
          let prestacao = 750;
          let operacao1 = (valor -= entrada / prestacao);
          document.getElementById(
            "resposta5").innerHTML = operacao1;
          }
function operacao2() 
          { 
          let branco = "preto";
          let preto = "cinza";
          let cinza = "branco";
          let operacao2 = (branco += preto += cinza);
          document.getElementById(
            "resposta6").innerHTML = operacao2;
          }