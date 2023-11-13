let form = document.getElementById("form");
let codigo = document.getElementById("codigo");
let name = document.getElementById("name");
let preco = document.getElementById("preco");
let table = document.getElementById("table");

//envio do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault();
    //cria um objeto com os dados do item
    let item = {
        codigo: codigo.value,
        name: name.value,
        price: Number(preco.value),
        bought: false
    };
    adicionar(item);
    //limpa o formulário
    codigo.value = "";
    name.value = "";
    preco.value = "";

    atualizarTabela();
});


function atualizarTabela() {
    //obter lista de compras
    let lista = listar();
    table.innerHTML = table.rows[0].outerHTML;
    for (let item of lista) {
        //cria uma nova linha na tabela
        let row = table.insertRow();
        //cria as células na linha
        let cellCodigo = row.insertCell();
        let cellName = row.insertCell();
        let cellPreco = row.insertCell();
        let cellBought = row.insertCell();
        let cellActions = row.insertCell();
        //preencher as células
        cellCodigo.textContent = item.codigo;
        cellName.textContent = item.name;
        cellPreco.textContent = item.preco.toFixed(2);
        cellBought.textContent = item.bought ? "Sim" : "Não";
        
        let buttonRemove = document.createElement("button");
        let buttonMark = document.createElement("button");
        let buttonUnmark = document.createElement("button");
        //definindo o texto dos botões
        buttonRemove.textContent = "Remover";
        buttonMark.textContent = "Marcar";
        buttonUnmark.textContent = "Desmarcar";
        //adicionar os eventos
        buttonRemove.addEventListener("click", function() {
            remover(item);
            atualizarTabela();
        });

        buttonMark.addEventListener("click", function() {
            marcar(item);
            atualizarTabela();
        });

        buttonUnmark.addEventListener("click", function() {
            desmarcar(item);
            atualizarTabela();
        });
        //adicionar os botões 
        cellActions.appendChild(buttonRemove);
        cellActions.appendChild(buttonMark);
        cellActions.appendChild(buttonUnmark);
    }
}

//carregamento da página
window.addEventListener("load", function() {
    atualizarTabela();
});
