import Pessoa from '../model/pessoa_model.js';

export async function getPessoa() {
    //colocar a chamadada do serviço aqui
    //mock
    let pessoa = new Pessoa();
    pessoa.setNome("João");
    pessoa.setSexo("2");
    pessoa.setCep("08730800");
    console.log("getPessoa");
    console.log(pessoa);
    return pessoa;
}

export async function postPessoa(pessoa) {
    console.log("postPessoa");
    console.log(pessoa);
}