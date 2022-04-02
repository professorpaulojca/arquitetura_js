export async function getDataFromCep(cep){
    let url = "https://viacep.com.br/ws/"+cep+"/json/";
    let response = await fetch(url);
    let data = await response.json();
    return data;
    
}