'use strict';

const validaemail = () =>{
    let e_mail = document.getElementById('email').value;
    if(Array.from(e_mail).indexOf("@") !== -1){

    }else if(e_mail == ''){

    }else{
        alert('Digite um e-mail válido, por favor');
        document.getElementById('email').value = '';
    }
}
const limparform = () => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherform = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async () => {
    const CEP = document.getElementById('cep').value;
    const cepinho = document.getElementById('cep').value.length;
    const url = `https://viacep.com.br/ws/${CEP}/json/`;
    if(cepValido(cepinho)){
        let dados = await fetch(url);
        let endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
    document.getElementById('endereco').value = 'CEP INVÁLIDO';
        } else {
            preencherform(endereco);
        }
    }else if(CEP === ''){
    }
    else{
        alert('CEP inválido')
    }
}

const cepValido = (cepinho)=> cepinho === 8 && !isNaN(cepinho);

const enviarform = () => {
    if(document.getElementById('nome').value != '' &&
        document.getElementById('email').value != '' &&
        document.getElementById('cep').value != '' &&
        document.getElementById('endereco').value != '' &&
        document.getElementById('numero').value != '' &&
        document.getElementById('bairro').value != '' &&
        document.getElementById('cidade').value != '' &&
        document.getElementById('estado').value != ''
    ){
        let nome = document.getElementById('nome').value.split(' ');
        document.getElementById('estado').value = '';
        alert(`Seus Dados foram enviados, muito obrigado, ${nome[0]}.`)
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cep').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('numero').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
    }else
    alert('preencha todos os campos, por favor!')
}

document.getElementById('email')
    .addEventListener('focusout', validaemail);
document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);
document.getElementById('cep')
    .addEventListener('focus', limparform);
document.getElementById('btn')
    .addEventListener('click', enviarform);