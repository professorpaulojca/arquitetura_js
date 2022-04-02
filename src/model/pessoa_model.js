//youtube.com/watch?v=vylVbb2PY0M
//https://www.youtube.com/watch?v=X6klpqubyBw
export default class pessoa {
    constructor() {
        this.nome = "";
        this.sexo = "";
        this.cep = "";
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
   
}