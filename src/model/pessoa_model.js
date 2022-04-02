//youtube.com/watch?v=vylVbb2PY0M
//https://www.youtube.com/watch?v=X6klpqubyBw
import Pessoa from '../model/pessoa_mae_model.js';
export default class Cliente extends Pessoa{
    constructor() {
        super();
        this.cep = "";
    }
   
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
       
   
}