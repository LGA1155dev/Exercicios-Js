# Exercícios-Js



<img src="JavaScript.gif"></img>

<h1>Criando códigos no js  pra treinar a lógica</h1>



<p>Estou praticando alguns exercicios de logica de programação no JS.
O primeiro código vai do mais simples que é fazer uma função que verifique se aquele número digitado é impar ou par, e de acordo com o resultado, ele exibe na tela se é impar ou par.</p>

<p>No primeiro exercicio fiquei com um pé atrás pelo meu script ao inves de ler se o valor de resto da divisão com 2 é igual a 0 ou não, o programa sempre me retornava 0 que é uma tentativa de converter um string no JS, descobri que a causa era porque eu tinha colocado pra ler o valor quando ele foi declarado no inicio, mas como nenhum valor tinha sido digitado o Java Script me retornava 0 que é a conversão que ele tentou fazer de str pra number, foi só eu colocar pra o JS ler o valor com .value na verificação da função Verificar() que ele foi funcionar, pois me retornou o valor digitado pelo usuario naquele momento que ocorreu o evento click, e então parou de me retornar uma str vazia e passou a me retornar o valor que o usuario digitou.</p>
