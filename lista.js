//recebe um item de compra e armazena dentro da lista
function adicionar(item) {
    //obter a lista ou criar uma nova se não existir
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    lista.push(item);
    localStorage.setItem("lista", JSON.stringify(lista));
}

//recebe um item de compra, busca ele na lista e remove
function remover(item) {
    let lista = JSON.parse(localStorage.getItem("lista"));
    let index = lista.findIndex(i => i.codigo == item.codigo);
    //remover o item da lista
    lista.splice(index, 1);
    localStorage.setItem("lista", JSON.stringify(lista));
}

//recebe um item de compra, busca ele na lista e muda a propriedade bought para true
function marcar(item) {
    let lista = JSON.parse(localStorage.getItem("lista"));
    let index = lista.findIndex(i => i.codigo == item.codigo);
    // Mudar a propriedade bought do item para true
    lista[index].bought = true;
    localStorage.setItem("lista", JSON.stringify(lista));
}

//recebe um item, busca ele na lista e muda a propriedade bought para false
function desmarcar(item) {
    let lista = JSON.parse(localStorage.getItem("lista"));
    let index = lista.findIndex(i => i.codigo == item.codigo);
    lista[index].bought = false;
    localStorage.setItem("lista", JSON.stringify(lista));
}

//retorna todos os itens que estão armazenados na lista
function listar() {
    return JSON.parse(localStorage.getItem("lista")) || [];
}
