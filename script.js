let contasClientes=[];
const validarSenha = () => {
    const senha = document.getElementById('senha').value;
    const confirmacao = document.getElementById('confirmasenha').value;
    if (senha === confirmacao) {
        return true;
    }
    else{  
        return false;
    }
}

const criarConta = (event) =>{
    event.preventDefault();
    if(validarSenha()==true){
        const contaCliente = {
            nome : document.getElementById('nome').value,
            cpf : document.getElementById('cpf').value,
            celula : document.getElementById('celular').value,
            senha : document.getElementById('senha').value,
            conta : Math.floor(1000 + Math.random() * 90000)
        };
        contasClientes.push(contaCliente);
        alert(`Conta ${contaCliente.conta} criada com sucesso!`);
    }

    else{
        alert(`Senha inválida!`);
    }
    /*for(let i=0; i<contasClientes.length; i++){
        alert(Object.values(contasClientes[i]));
        
    }*/
}

const form = document.getElementById('form');
form.addEventListener('submit', criarConta);


