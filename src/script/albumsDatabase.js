const albumList = [
    {
      title: "Acabou o Chorare",
      genre: "MPB",
      band: "Novos Baianos",
      price: "137.91",
      img: "./src/assets/acabou.jpg",
    },
    {
      title: "The Wall",
      genre: "Rock",
      band: "Pink Floyd",
      price: "123.56",
      img: "./src/assets/pink.jpg",
    },
    {
      title: "To Pimp a Butterfly",
      genre: "Rap",
      band: "Kendrick Lamar",
      price: "102.66",
      img: "./src/assets/pimp.jpg",
    },
    {
      title: "Thriller",
      genre: "Pop",
      band: "Michael Jackson",
      price: "142.32",
      img: "./src/assets/jackson.jpg",
    },
    {
      title: "All Eyez on Me",
      genre: "Hip-Hop",
      band: "2Pac",
      price: "50.13",
      img: "./src/assets/2paco.jpg",
    },
    {
      title: "Dom de Sambar",
      genre: "Samba",
      band: "Turma do Pagode",
      price: "51.67",
      img: "./src/assets/turma.jpg",
    },
  ];
  
// Criando os elementos .albums dinamicamente
document.addEventListener('DOMContentLoaded', function() {
  const root = document.querySelector('.albums__div');

  albumList.forEach(album => {
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
        <p>R$${album.price}</p>
        <button>Comprar</button>
      </div>
    `;

    root.appendChild(albumElement);
  });
});

  
  