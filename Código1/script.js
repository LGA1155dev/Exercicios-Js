// O objetivo é criar uma função que analise o número e retorne se ele pe par ou impar

const num = document.querySelector('#num')
const text = document.getElementById('texto')
const btn = document.getElementById('btn')

function Verificar(){
   // let divisao = num.value / 2;
   // alert(divisao);
if (num.value == 0 || num.value == null || num.value == undefined || num.value == "" || num.value == 0){
    text.textContent = 'ERRO, valor invalido!';
    text.style.color = 'darkred';
} else{

   if(num.value % 2 == 0){
     text.textContent = `O seu número ${num.value} é PAR`
   } else{
     text.textContent = `O seu número ${num.value} é IMPAR`
   }
}
}

btn.addEventListener('click', () => {
    Verificar()
})