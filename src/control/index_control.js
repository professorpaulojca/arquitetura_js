//models
import Pessoa from '../model/pessoa_model.js';
//repositories
import { getPessoa, postPessoa } from '../repository/pessoa_repo.js';
import SexoRepo from '../repository/sexo_repo.js';
//services
import { getDataFromCep } from '../services/cep_service.js';
//utilities
import { enche_combo, } from '../utilities/combo_utilities.js';

export function getComboSexo() {
    let sexoRepo = new SexoRepo();
    let element_sexo = "select_sexo";
    return enche_combo(element_sexo, sexoRepo.getSexos());
}

export async function getCEP() {
    let element_cep = document.getElementById('text_cep');
    let span_rua = document.getElementById('span_rua');
    let span_bairro = document.getElementById('span_bairro');
    element_cep.addEventListener('keypress', (event) => {
        const keyName = event.key;
        if (keyName === 'Enter') {
            getDataFromCep(element_cep.value).then(data => {
                span_rua.innerHTML = data.logradouro;
                span_bairro.innerHTML = data.bairro;
            });
        }
    });
}

export function get_Pessoa() {
    getPessoa().then(pessoa => {
        let element_nome = document.getElementById('text_nome');
        let element_sexo = document.getElementById('select_sexo');
        let element_cep = document.getElementById('text_cep');
        let span_rua = document.getElementById('span_rua');
        let span_bairro = document.getElementById('span_bairro');
        element_nome.value = pessoa.getNome();
        element_sexo.value = pessoa.getSexo();
        element_cep.value = pessoa.getCep();
        getDataFromCep(element_cep.value).then(data => {
            span_rua.innerHTML = data.logradouro;
            span_bairro.innerHTML = data.bairro;
                        
        });
    });
}

export function post_Pessoa(){
    let element_btn_post = document.getElementById('btn_post');
    element_btn_post.addEventListener('click', (event) => {
        let pessoa = new Pessoa();
        let element_nome = document.getElementById('text_nome');
        let element_sexo = document.getElementById('select_sexo');
        let element_cep = document.getElementById('text_cep');
        pessoa.setNome(element_nome.value);
        pessoa.setSexo(element_sexo.value);
        pessoa.setCep(element_cep.value);
        postPessoa(pessoa);
        
    });
}
