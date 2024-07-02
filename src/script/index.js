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

// Tornar o sliding do input consistente com o estilo visual
function applyInputRangeStyle() {
  const inputRange = document.querySelector(".range");

  inputRange.addEventListener("input", (event) => {
    const currentInputValue = event.target.value;
    const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;

    inputRange.style.background = `linear-gradient(to right, var(--brand-Color-1) ${runnableTrackProgress}%, var(--gray-5) ${runnableTrackProgress}%)`;
  });
}

function routine() {
  applyInputRangeStyle();
}

// Chama a rotina quando a página for carregada
document.addEventListener("DOMContentLoaded", routine);
