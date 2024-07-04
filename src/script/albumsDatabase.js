let albumList = [];

const newList = async () => {
  try {
      const response = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
      
      if (!response.ok) {
          throw new Error('Erro ao carregar a lista de músicas');
      }
      
      const jsonLista = await response.json();
      albumList = jsonLista
      return jsonLista;
      
  } catch (error) {
      console.error('Erro na requisição:', error);
      return []; // Retorna um array vazio em caso de erro
  }
};


// Função para renderizar os álbuns
async function renderAlbums(filteredAlbumList) {
  const root = document.querySelector('.albums__div');
  root.innerHTML = ''; // Limpar álbuns anteriores

  filteredAlbumList.forEach(album => {
    const albumElement = document.createElement('div');
    albumElement.classList.add('albums');

    // Adicionando a classe dark-mode se o tema estiver ativado
    if (darkMode) {
      albumElement.classList.add('albums__dark');
      albumElement.classList.remove('albums');
    }

    albumElement.innerHTML = `
      <img src="${album.img}" alt="${album.band}">
      <h3>${album.title}</h3>
      <div class="albums__div1">
        <p>${album.band}</p>
        <p>${album.genre}</p>
      </div>
      <div class="albums__div2">
        <p>R$${Number(album.price).toFixed(2)}</p>
        <button>Comprar</button>
      </div>
    `;
    root.appendChild(albumElement);
  });
}

// Função para atualizar o texto do preço e filtrar os álbuns
function updatePriceAndFilter() {
  console.log("oi")
  const rangeInput = document.getElementById('range');
  const priceValue = document.getElementById('price-value');
  const maxPrice = parseFloat(rangeInput.value);

  // Atualizar o texto do preço
  priceValue.textContent = `R$ ${maxPrice}`;

  // Filtrar álbuns pelo preço
  const filteredAlbumList = albumList.filter(album => album.price <= maxPrice);

  // Renderizar os álbuns filtrados
  renderAlbums(filteredAlbumList);
}

// Adicionar evento ao input range
document.getElementById('range').addEventListener('input', updatePriceAndFilter);

// Inicializar a renderização dos álbuns
document.addEventListener('DOMContentLoaded', async function() {
  const filteredAlbumList = await newList();
  renderAlbums(filteredAlbumList); // Mostrar todos os álbuns inicialmente
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








  
  