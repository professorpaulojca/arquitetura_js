export default class sexo_repo {
    //mock
    //colocar o serviço aqui
    constructor() {
        this.sexos = [
            {
                id: 1,
                descricao: 'Masculino'
            },
            {
                id: 2,
                descricao: 'Feminino'
            },
            {
                id: 3,
                descricao: 'Não Informado'
            }
        ];
    }
    getSexos() {
        return this.sexos;
    }
    getSexo(id) {
        return this.sexos.find(sexo => sexo.id === id);
    }
}
