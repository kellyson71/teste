function validateLogin() {
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;

  // Check if the entered email and password match the specified values
  if (emailInput === "kellyson.medeiros.pdf@gmail.com" && passwordInput === "kellyson123") {
      // Redirect to another page
      window.location.href = "another_page.html";
  } else {
      alert("ainda vou fazer a pagina de cadastro");
  }
}

function forgotPassword() {
  alert("como vc esqueceu a senha? nem conta vc tem"); // Display a message when "Esqueci minha senha" is clicked
}

const capas = [
  './capas/cap1.png',
  './capas/cap2.png',
  './capas/cap3.png',
  './capas/cap4.png',
  './capas/cap5.png',
];

let livroExpandido = null;
let livrosAbertos = 0;

document.querySelectorAll('.livro').forEach((livro, index) => {
  livro.style.backgroundImage = `url('${capas[index]}')`;
  livro.setAttribute('data-caminho-expandido', `./capas/capa${index + 1}.jpg`);
  livro.dataset.index = index;
});

function alterarLivro(livroClicado) {
  const popupContent = document.getElementById('popup-content');
  const sinopse = livroClicado.querySelector('.sinopse');

  if (livroClicado.classList.contains('livro-expanded')) {
    popupContent.innerHTML = `<p>${sinopse.innerHTML}</p><button onclick="verConteudo('${livroClicado.id}')">Ver Conteúdo</button>`;
    mostrarPopup();
  } else {
    if (livroExpandido) {
      livroExpandido.classList.remove('livro-expanded');
      livroExpandido.querySelector('.sinopse').style.display = 'none';
      livroExpandido.style.backgroundImage = `url('${capas[livroExpandido.dataset.index]}')`;
    }

    livroClicado.classList.add('livro-expanded');
    livroExpandido = livroClicado;

    const caminhoExpandido = livroClicado.getAttribute('data-caminho-expandido');
    livroClicado.style.backgroundImage = `url('${caminhoExpandido}')`;
    sinopse.style.display = 'block';

    document.querySelectorAll('.livro').forEach(outroLivro => {
      if (outroLivro !== livroClicado) {
        outroLivro.querySelector('.sinopse').style.display = 'none';
        outroLivro.classList.remove('livro-expanded');
      }
    });

    // Verifica se todos os livros foram abertos
    livrosAbertos++;

  }
}

function mostrarQuintoLivro() {
  const quintoLivro = document.getElementById('quinto-livro');
  quintoLivro.style.display = 'block';
}

function mostrarPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

function fecharPopup() {
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');

  if (livroExpandido) {
    livroExpandido.classList.remove('livro-expanded');
    livroExpandido.querySelector('.sinopse').style.display = 'none';
    livroExpandido.style.backgroundImage = `url('${capas[livroExpandido.dataset.index]}')`;
    livroExpandido = null;
  }

  document.querySelectorAll('.livro').forEach(livro => {
    livro.style.backgroundImage = `url('${capas[livro.dataset.index]}')`;
  });

  popupContent.innerHTML = '';
  popup.style.display = 'none';
}

function verConteudo(livroId) {
  if (livrosAbertos >= 4) {
    mostrarQuintoLivro();
  }
  fecharPopup()
  switch (livroId) {
    case 'livro1':
      window.open('./livro/index.html', '_blank');
      break;
    case 'livro2':
      window.open('./livro/cap2.html', '_blank');
      break;
    case 'livro3':
      window.open('./livro/index2.html', '_blank');
      break;
    case 'livro4':
      window.open('./livro/index3.html', '_blank');
      break;
    case 'quinto-livro':
      window.open('./livro/finale/index.html', '_blank');
      break;
    default:
      console.error('Livro não encontrado');
  }
}