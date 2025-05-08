//1° selecionei os elementos do HTML, para depois manipular
const adicionar_tarefa = document.getElementById('adicionar_tarefa')
const btn_adicionar = document.getElementById('btn_adicionar')
const secao_tarefas = document.getElementById('secao_tarefas')
const input_tarefa = document.getElementById('input_tarefa')


// FUNÇÕES
//criei todo o conjuro , uma div, um novo titulo, e novos botões
const novaTarefa = (text) => {

    const secao_nova_tarefa = document.createElement('div');
    secao_nova_tarefa.classList.add('lista');

    const novo_titulo = document.createElement('h3');
    novo_titulo.innerText = text;
    secao_nova_tarefa.appendChild(novo_titulo);

    const btn_confirmar = document.createElement('button');
    btn_confirmar.classList.add('finalizar');
    btn_confirmar.innerHTML =  '<i class="bi bi-check2"></i>';
    secao_nova_tarefa.appendChild(btn_confirmar);

    const btn_remover = document.createElement('button');
    btn_remover.classList.add('remover');
    btn_remover.innerHTML =  '<i class="bi bi-x"></i>';
    secao_nova_tarefa.appendChild(btn_remover);


    //inseri esse novo elemento no HTML
    document.getElementById('tarefas').appendChild(secao_nova_tarefa);
    
}

//EVENTOS

adicionar_tarefa.addEventListener('submit', (e) => {
    e.preventDefault(); //previne o envio do formulário padrão
    
    const valor_input = input_tarefa.value

    if (valor_input === '') {
        const alerta = document.getElementById('alerta'); //cria uma varivel pro alerta
        alerta.classList.add('mostrar'); //adiciona a classe alerta HTML
    
        setTimeout(() => {
            alerta.classList.remove('mostrar'); //remove a função depois de 3 segundos
        }, 3000); 
    }
    
    else{
        novaTarefa(valor_input)
        input_tarefa.value = '';
        input_tarefa.focus();
    }
})



document.addEventListener('click', (e) => {
    
    const clicou = e.target.closest('button'); // e.target usado pra saber quem exatamete foi clicado ou interagido, closest garante que pegamos o botão, mesmo se clicar no <i>
    
    if (!clicou) return;

    const verificar = clicou.closest('div')

    if(clicou.classList.contains('finalizar')){
        e.preventDefault();
        verificar.classList.toggle('confirmacao')
    }

    else if(clicou.classList.contains('remover')){
        verificar.remove()
    }
})