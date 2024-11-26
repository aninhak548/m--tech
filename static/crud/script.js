let tarefas = [];

function renderizarTarefas() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const tarefaDiv = document.createElement('div');
        tarefaDiv.classList.add('tarefa')

        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = tarefa;

        const botaoEditar = document.createElement('button')
        botaoEditar.textContent = 'editar';
        botaoEditar.classList.add('botao')
        botaoEditar.onclick = () => editarTarefa(index);
        
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'excluir';
        botaoExcluir.classList.add('botao');
        botaoExcluir.onclick = () => excluirTarefa(index);

        tarefaDiv.appendChild(botaoEditar)
        tarefaDiv.appendChild(botaoExcluir)
        tarefaDiv.appendChild(textoTarefa)

        listaTarefas.appendChild(tarefaDiv);
    })}

function adicionarTarefa() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    if(novaTarefa) {
        tarefas.push(novaTarefa);
        document.getElementById('novaTarefa').value = '';
        renderizarTarefas();
    }
}

function editarTarefa(index) {
    const novaDescricao = prompt('editar tarefa:', tarefas[index]);
    if(novaDescricao) {
    tarefas[index] = novaDescricao;
    renderizarTarefas();
    }
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}

//renderizar a lista ao carregar a pagina
renderizarTarefas();