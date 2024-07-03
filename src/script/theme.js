// Selecionando o button e a imagem dentro do button
const button = document.querySelector(".dark__mode");
const darkModeImg = button.querySelector("img");

// Selecionando o body e header
const body = document.body;
const header = document.querySelector("header");

// Criando estado booleano do nosso tema
let darkMode = false;

// Criando a função
function themeChange() {
  // Invertendo o valor da variável
  darkMode = !darkMode;

  // Acessando o body e header via DOM e implementando/tirando a classe
  body.classList.toggle("dark-mode");
  header.classList.toggle("header__dark");

  // Atualizando as classes dos elementos .albums criados dinamicamente
  const albumsElements = document.querySelectorAll(".albums, .albums__dark");
  albumsElements.forEach(album => {
    if (darkMode) {
      album.classList.add("albums__dark");
      album.classList.remove("albums");
    } else {
      album.classList.add("albums");
      album.classList.remove("albums__dark");
    }
  });

  // Atualizando as classes dos botões de gênero
  const genreButtons = document.querySelectorAll(".button");
  genreButtons.forEach(button => {
    if (darkMode) {
      button.classList.add("button__dark");
    } else {
      button.classList.remove("button__dark");
    }
  });

  // Verificando o estado atual de darkMode
  if (darkMode) {
    header.classList.remove("header");
    darkModeImg.src = "./src/assets/light.png";
  } else {
    header.classList.add("header");
    darkModeImg.src = "./src/assets/darkmode.png";
  }

  // Chamando o localStorage e acessando o método
  localStorage.setItem("@openMusic:theme", JSON.stringify(darkMode));
}

// Adicionando o evento e chamando a função themeChange
button.addEventListener("click", (event) => {
  event.preventDefault();
  themeChange();
});

// Criando a função que analisa o tema
function themeAnalasys() {
  // Reatribuindo o valor da variável conforme o valor salvo
  // Usando o JSON.parse para converter o valor de JSON para JS
  darkMode = JSON.parse(localStorage.getItem("@openMusic:theme"));

  // Verificando se darkMode é true
  if (darkMode) {
    // Adicionando darkMode
    body.classList.add("dark-mode");
    header.classList.add("header__dark");
    header.classList.remove("header");
    darkModeImg.src = "./src/assets/light.png";

    // Atualizando as classes dos elementos .albums criados dinamicamente
    const albumsElements = document.querySelectorAll(".albums, .albums__dark");
    albumsElements.forEach(album => {
      album.classList.add("albums__dark");
      album.classList.remove("albums");
    });

    // Atualizando as classes dos botões de gênero
    const genreButtons = document.querySelectorAll(".button");
    genreButtons.forEach(button => {
      button.classList.add("button__dark");
    });
  }
}

// Chamando a função em escopo global
themeAnalasys();



