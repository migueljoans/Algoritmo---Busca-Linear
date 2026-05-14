# Busca Linear em JavaScript

Este projeto demonstra como funciona o algoritmo de **Busca Linear** usando JavaScript.
A busca linear é um método simples utilizado para procurar um valor dentro de uma lista.

---

## Como funciona
O algoritmo percorre os elementos do array um por um até encontrar o valor desejado.

Passos:
1. Começa pelo primeiro elemento da lista.
2. Compara cada valor com o elemento procurado.
3. Se encontrar, retorna a posição do elemento.
4. Se chegar ao final sem encontrar, retorna `-1`.

---

## Código

const lista = [10, 50, 30, 70, 80, 20];

console.log(buscalinear(lista, 30));
console.log(buscalinear(lista, 99));

---

## Saída

2
-1

---

## Explicação

O número 30 foi encontrado na posição 2 e o número 99 não existe na lista, então o algoritmo retornou -1.
