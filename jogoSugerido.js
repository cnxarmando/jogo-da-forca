let tentativas = 6

const titulo = document.querySelector('h1')
escreverPalavra = () => {
  /// Função para escrever o h1
  const tituloArray = titulo.innerHTML.split('')
  titulo.innerHTML = ''
  tituloArray.forEach((letra, i) => {
    setTimeout(() => (titulo.innerHTML += letra), 120 * i)
  })
}
escreverPalavra(titulo)

setTimeout(() => {
  // Função para agrardar o carregamento da página
  palavraCategoriaSugerida()
  montarPalavraNaTela()
}, 2000)

//Função palavra e categoria sugeridas
let palavraSugerida = ''
let categoriaSugerida = ''
function palavraCategoriaSugerida() {
  palavraSugerida = prompt('Digite uma palavra para o jogo').toUpperCase()
  categoriaSugerida = prompt(
    'Digite uma categoria para a palavra'
  ).toUpperCase()
}

let palavraDinamica = []
function montarPalavraNaTela() {
  const categoria = document.querySelector('#categoria')
  categoria.innerHTML = categoriaSugerida

  const palavraTela = document.querySelector('#palavra-secreta')
  palavraTela.innerHTML = ''

  for (i = 0; i < palavraSugerida.length; i++) {
    if (palavraDinamica[i] == undefined) {
      if (palavraSugerida[i] == ' ') {
        palavraDinamica[i] = ' '
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letrasEspaco'>" +
          palavraDinamica[i] +
          '</p>'
      } else {
        palavraDinamica[i] = '&nbsp;'
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letras'>" +
          palavraDinamica[i] +
          '</p>'
      }
    } else {
      if (palavraSugerida[i] == ' ') {
        palavraDinamica[i] = ' '
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letrasEspaco'>" +
          palavraDinamica[i] +
          '</p>'
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letras'>" +
          palavraDinamica[i] +
          '</p>'
      }
    }
  }
  console.log(palavraDinamica)
}

function verificarLetra(e) {
  e = e || window.event
  let key = e.keyCode || e.which
  return String.fromCharCode(key)
}

let letraEscolhidaTeclado = (document.onkeypress = e => {
  letraEscolhidaTeclado = verificarLetra(e).toUpperCase()
  if (letraEscolhidaTeclado == 'A') {
    verificaLetraEscolhida('A')
  } else if (letraEscolhidaTeclado == 'B') {
    verificaLetraEscolhida('B')
  } else if (letraEscolhidaTeclado == 'C') {
    verificaLetraEscolhida('C')
  } else if (letraEscolhidaTeclado == 'D') {
    verificaLetraEscolhida('D')
  } else if (letraEscolhidaTeclado == 'E') {
    verificaLetraEscolhida('E')
  } else if (letraEscolhidaTeclado == 'F') {
    verificaLetraEscolhida('F')
  } else if (letraEscolhidaTeclado == 'G') {
    verificaLetraEscolhida('G')
  } else if (letraEscolhidaTeclado == 'H') {
    verificaLetraEscolhida('H')
  } else if (letraEscolhidaTeclado == 'I') {
    verificaLetraEscolhida('I')
  } else if (letraEscolhidaTeclado == 'J') {
    verificaLetraEscolhida('J')
  } else if (letraEscolhidaTeclado == 'K') {
    verificaLetraEscolhida('K')
  } else if (letraEscolhidaTeclado == 'L') {
    verificaLetraEscolhida('L')
  } else if (letraEscolhidaTeclado == 'M') {
    verificaLetraEscolhida('M')
  } else if (letraEscolhidaTeclado == 'N') {
    verificaLetraEscolhida('N')
  } else if (letraEscolhidaTeclado == 'O') {
    verificaLetraEscolhida('O')
  } else if (letraEscolhidaTeclado == 'P') {
    verificaLetraEscolhida('P')
  } else if (letraEscolhidaTeclado == 'Q') {
    verificaLetraEscolhida('Q')
  } else if (letraEscolhidaTeclado == 'R') {
    verificaLetraEscolhida('R')
  } else if (letraEscolhidaTeclado == 'S') {
    verificaLetraEscolhida('S')
  } else if (letraEscolhidaTeclado == 'T') {
    verificaLetraEscolhida('T')
  } else if (letraEscolhidaTeclado == 'U') {
    verificaLetraEscolhida('U')
  } else if (letraEscolhidaTeclado == 'V') {
    verificaLetraEscolhida('V')
  } else if (letraEscolhidaTeclado == 'W') {
    verificaLetraEscolhida('W')
  } else if (letraEscolhidaTeclado == 'X') {
    verificaLetraEscolhida('X')
  } else if (letraEscolhidaTeclado == 'Y') {
    verificaLetraEscolhida('Y')
  } else if (letraEscolhidaTeclado == 'Z') {
    verificaLetraEscolhida('Z')
  }
})

function verificaLetraEscolhida(letra) {
  if (tentativas > 0) {
    mudarStyleLetra('#tecla-' + letra)
    comparalistas(letra)
    montarPalavraNaTela()
    setTimeout(() => {
    mostrarLetraIncorretaNaTela()
    }, 100)
  }
}


let letraCapturadaMouse = document.addEventListener('click', e => {
  letraCapturadaMouse = e.target.value
  console.log(letraCapturadaMouse)
})
function mudarStyleLetra(tecla) {
  setTimeout(() => {
    if (
      palavraSugerida.indexOf(letraCapturadaMouse || letraEscolhidaTeclado) >= 0
    ) {
      document.querySelector(tecla).style.background = '#10E93F'
      document.querySelector(tecla).style.color = '#ffffff'
    } else if (
      palavraSugerida.indexOf(letraCapturadaMouse || letraEscolhidaTeclado) ==
      -1
    ) {
      document.querySelector(tecla).style.background = '#FF0000'
      letrasIncorretas.push(letraCapturadaMouse || letraEscolhidaTeclado)
    }
  }, 100)
}

function comparalistas(letra) {
  const pos = palavraSugerida.indexOf(letra)
  if (pos < 0) {
    tentativas--
    carregaImagemForca()

    if (tentativas == 0) {
      abreModal(
        `OPS!, "Não foi dessa vez ... A palavra secreta era + ${palavraSugerida}`
      )
    }
  } else {
    for (i = 0; i < palavraSugerida.length; i++) {
      if (palavraSugerida[i] == letra) {
        palavraDinamica[i] = letra
      }
    }
  }

  let vitoria = true
  for (i = 0; i < palavraSugerida.length; i++) {
    if (palavraSugerida[i] != palavraDinamica[i]) {
      vitoria = false
    }
  }

  if (vitoria == true) {
    abreModal(`PARABÉNS! "Você venceu...`)
    tentativas = 0
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.querySelector('#imagem').style.background =
        "url('./img/forca01.png')"
      break
    case 4:
      document.querySelector('#imagem').style.background =
        "url('./img/forca02.png')"
      break
    case 3:
      document.querySelector('#imagem').style.background =
        "url('./img/forca03.png')"
      break
    case 2:
      document.querySelector('#imagem').style.background =
        "url('./img/forca04.png')"
      break
    case 1:
      document.querySelector('#imagem').style.background =
        "url('./img/forca05.png')"
      break
    case 0:
      document.querySelector('#imagem').style.background =
        "url('./img/forca06.png')"
      break
    default:
      document.querySelector('#imagem').style.background =
        "url('./img/forca.png')"
      break
  }
}

//Mostra as letras incorretas na tela
let letrasIncorretas = []
function mostrarLetraIncorretaNaTela() {
  let sectionLetrasErradas = document.querySelector('.letras-erradas')  
  const letraNaTela = document.querySelector('#letras-erradas')
  if(letrasIncorretas.length > 0) {
  sectionLetrasErradas.style.display = 'block'
  letraNaTela.innerHTML = letraNaTela.innerHTML +
  "<p>" +
  letrasIncorretas +
  '</p>'
  letrasIncorretas = letrasIncorretas.slice(0, -1)
  console.log(letrasIncorretas)
  }
}

function abreModal(mensagem) {
  setTimeout(() => {
    alert(mensagem)
    reniciar()
  }, 1000)
}

function reniciar() {
  location.reload()
}

let bntReiniciar = document.querySelector('#btnReiniciar')
bntReiniciar.addEventListener('click', function () {
  location.reload()
})
