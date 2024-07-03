const albumList = [
  {
    title: "Acabou o Chorare",
    genre: "MPB",
    band: "Novos Baianos",
    price: 137.91,
    img: "./src/assets/acabou.jpg",
  },
  {
    title: "The Wall",
    genre: "Rock",
    band: "Pink Floyd",
    price: 123.56,
    img: "./src/assets/pink.jpg",
  },
  {
    title: "To Pimp a Butterfly",
    genre: "Rap",
    band: "Kendrick Lamar",
    price: 102.66,
    img: "./src/assets/pimp.jpg",
  },
  {
    title: "Thriller",
    genre: "Pop",
    band: "Michael Jackson",
    price: 142.32,
    img: "./src/assets/jackson.jpg",
  },
  {
    title: "All Eyez on Me",
    genre: "Hip-Hop",
    band: "2Pac",
    price: 50.13,
    img: "./src/assets/2paco.jpg",
  },
  {
    title: "Dom de Sambar",
    genre: "Samba",
    band: "Turma do Pagode",
    price: 51.67,
    img: "./src/assets/turma.jpg",
  },
];

// Função para renderizar os álbuns
function renderAlbums(filteredAlbumList) {
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
        <p>R$${album.price.toFixed(2)}</p>
        <button>Comprar</button>
      </div>
    `;

    root.appendChild(albumElement);
  });
}

// Função para atualizar o texto do preço e filtrar os álbuns
function updatePriceAndFilter() {
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
document.addEventListener('DOMContentLoaded', function() {
  renderAlbums(albumList); // Mostrar todos os álbuns inicialmente
  updatePriceAndFilter(); // Atualizar o preço e aplicar filtragem
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


  
  