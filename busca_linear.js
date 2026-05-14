// exemplo de busca linear em JavaScript
function buscalinear(arr, alvo){
    for(let i = 0; i < arr.length; i++){
        // verifica se o elemento atual é o alvo
        if (arr[i] === alvo){
            return i; // retorna o índice
        }
    }
    return -1; // retorna -1 se o alvo não for encontrado
}

const lista = [10, 50, 30, 70, 80, 20];
console.log(buscalinear(lista, 30)); // saída: 2
console.log(buscalinear(lista, 99)); // saída: -1  