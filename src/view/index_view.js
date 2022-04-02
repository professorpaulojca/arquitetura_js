import {getComboSexo, getCEP, get_Pessoa, post_Pessoa} from "../control/index_control.js";

function setCampoSexo() {
    getComboSexo();
}
function setCampoCEP(){
    
    getCEP();
}
function setPessoa(){
    get_Pessoa(); //alterar //consultar
}
function setPost(){
    post_Pessoa();
}
function init(){
//main
setCampoSexo();
setCampoCEP();
setPessoa();
setPost();
}

init();