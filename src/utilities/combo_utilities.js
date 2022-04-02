export function enche_combo(element,lista){
    let combo = document.getElementById(element);
    for(let i = 0; i < lista.length; i++){
        let option = document.createElement('option');
        option.value = lista[i].id;
        option.text = lista[i].descricao;
        combo.appendChild(option);
    }
}