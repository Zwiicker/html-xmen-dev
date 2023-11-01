/*
  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

let backgroundImage = document.querySelector('body::before');
const personagens = document.querySelectorAll('.personagem'); //é uma NodeList que contém todos os elementos com a classe CSS 'personagem
const personagemSelecionado = document.querySelector('.personagem-selecionado');

personagens.forEach(personagem => { //Para cada elemento com a classe 'personagem', o código dentro do bloco de código será executado.

  personagem.addEventListener('click', () => { //Quando um elemento com a classe 'personagem' é clicado, a função definida dentro deste bloco de código será executada.
    document.body.classList.add('hovered');
    if (window.innerWidth < 450) {
      window.scrollTo({top: 0, behavior: 'smooth' });//Primeiro, verifica se a largura da janela (viewport) é menor que 450 pixels. Se for, a janela é rolada até o topo de forma suave.
    }

    const personagemAnterior = document.querySelector('.personagem.selecionado');//Em seguida, encontra o elemento anteriormente selecionado (se houver) e remove a classe 'selecionado'.
    if (personagemAnterior) {
      personagemAnterior.classList.remove('selecionado');
    }

    personagem.classList.add('selecionado'); //Adiciona a classe 'selecionado' ao elemento que foi clicado.

    //Atualiza a imagem do personagem grande, o nome e a descrição com base nos atributos do elemento clicado.
    const idPersonagem = personagem.id; 
    const imagemPersonagemGrande = document.querySelector('.img-personagem');
    imagemPersonagemGrande.src = `./assets/img/card-${idPersonagem}.png`;

    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');

    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    personagemSelecionado.style.display = 'block';
  });

  personagem.addEventListener('mouseenter', () => { //Quando o mouse passa sobre um elemento com a classe 'personagem', a função dentro deste bloco de código é executada.
    
    personagens.forEach(p => p.classList.remove('selecionado'));//Remove a classe 'selecionado' de todos os elementos com a classe 'personagem'.
    personagem.classList.add('selecionado'); //Adiciona a classe 'selecionado' ao elemento sobre o qual o mouse está passando.

    //Atualiza a imagem do personagem grande, o nome e a descrição com base nos atributos do elemento sobre o qual o mouse está passando.
    const idPersonagem = personagem.id;
    const imagemPersonagemGrande = document.querySelector('.img-personagem');
    imagemPersonagemGrande.src = `./assets/img/card-${idPersonagem}.png`;

    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');

    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
  });
});


/* #### Resumo do código ####
Em resumo, este código manipula uma lista de elementos com a classe 'personagem'. 
Quando um elemento é clicado ou o mouse passa sobre ele, a função associada a esse evento é acionada. 
Ela atualiza a visualização com informações do personagem selecionado e exibe uma versão ampliada da imagem do personagem. 
Além disso, ele implementa um comportamento de rolagem suave para a parte superior da página se a largura da janela for menor que 450 pixels.*/

