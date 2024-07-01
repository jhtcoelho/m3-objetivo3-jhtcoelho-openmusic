// Script global

// Ativação do botão de genero
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.gender__list button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remover a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        // Adicionar a classe 'active' apenas ao botão clicado
        this.classList.add('active');
      });
    });
  });