let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function clickbotao(){
   console.log('O botão foi clicado')
   alert('O botão foi clicado')
}

function clickjs(){
    console.log('O botão alert foi clicado')
    alert('Eu amo JS')
}

function nomecidade(){
    console.log('nome cidade')
    let cidade = prompt('Digite o nome de uma cidade');
    if (cidade){
        alert(`Estive em ${cidade} e lembrei de você !`)
    }
    else{
        alert('Erro ! Você não digitou o nome da cidade !')
    }

}

function somanumero(){
    let soma1 = prompt('Digite um número')
    let soma2 = prompt('Digite outro número')
    let resultado = parseFloat(soma1) + parseFloat(soma2)
    console.log('Soma numeros')
    alert(`O Valor da soma entre ${soma1} e ${soma2} é = ${resultado}`)
}