// Função que cria o texto palavra por palavra
const titulo = document.querySelector('h1')
escreverPalavra = () => {
  const tituloArray = titulo.innerHTML.split('')
  titulo.innerHTML = ''
  tituloArray.forEach((letra, i) => {
    setTimeout(() => (titulo.innerHTML += letra), 120 * i)
  })
}
escreverPalavra(titulo)

// Função que abre o modal de instruçoes
let modal = document.querySelector('#modal')

function instrucoesModal() {
  modal.style.display = 'block'
}

function fecharModal() {
  modal.style.display = 'none'
}

// Função altera fundo em caso de vitória
function alterarFundo() {
  let fundo = document.querySelector('#background')
  fundo.style.display = 'block'
}

let palavraSecretaCategoria = ''
let palavraSecretaSorteada = ''
const palavras = [
  (palavra001 = {
    nome: 'IRLANDA',
    categoria: 'LUGARES'
  }),
  (palavra002 = {
    nome: 'EQUADOR',
    categoria: 'LUGARES'
  }),
  (palavra003 = {
    nome: 'CHILE',
    categoria: 'LUGARES'
  }),
  (palavra004 = {
    nome: 'INDONESIA',
    categoria: 'LUGARES'
  }),
  (palavra005 = {
    nome: 'MALDIVAS',
    categoria: 'LUGARES'
  }),
  (palavra006 = {
    nome: 'INGLATERRA',
    categoria: 'LUGARES'
  }),
  (palavra007 = {
    nome: 'GROELANDIA',
    categoria: 'LUGARES'
  }),
  (palavra008 = {
    nome: 'UZBEQUISTAO',
    categoria: 'LUGARES'
  }),
  (palavra009 = {
    nome: 'INDONESIA',
    categoria: 'LUGARES'
  }),
  (palavra010 = {
    nome: 'CREGUENHEM',
    categoria: 'LUGARES'
  }),
  (palavra011 = {
    nome: 'BICICLETA',
    categoria: 'TRANSPORTE'
  }),
  (palavra012 = {
    nome: 'LANCHA',
    categoria: 'TRANSPORTE'
  }),
  (palavra013 = {
    nome: 'NAVIO',
    categoria: 'TRANSPORTE'
  }),
  (palavra014 = {
    nome: 'TELEFERICO',
    categoria: 'TRANSPORTE'
  }),
  (palavra015 = {
    nome: 'MOTOCICLETA',
    categoria: 'TRANSPORTE'
  }),
  (palavra016 = {
    nome: 'BARCO',
    categoria: 'TRANSPORTE'
  }),
  (palavra017 = {
    nome: 'AERONAVE',
    categoria: 'TRANSPORTE'
  }),
  (palavra018 = {
    nome: 'TREM',
    categoria: 'TRANSPORTE'
  }),
  (palavra019 = {
    nome: 'CAIAQUE',
    categoria: 'TRANSPORTE'
  }),
  (palavra020 = {
    nome: 'FUNICULAR',
    categoria: 'TRANSPORTE'
  }),
  (palavra021 = {
    nome: 'XICARA',
    categoria: 'OBJETOS'
  }),
  (palavra022 = {
    nome: 'MOEDA',
    categoria: 'OBJETOS'
  }),
  (palavra023 = {
    nome: 'ESPARADRAPO',
    categoria: 'OBJETOS'
  }),
  (palavra024 = {
    nome: 'SINO',
    categoria: 'OBJETOS'
  }),
  (palavra025 = {
    nome: 'CHUVEIRO',
    categoria: 'OBJETOS'
  }),
  (palavra026 = {
    nome: 'TAMBORETE',
    categoria: 'OBJETOS'
  }),
  (palavra027 = {
    nome: 'LAMPADA',
    categoria: 'OBJETOS'
  }),
  (palavra028 = {
    nome: 'BOCAL',
    categoria: 'OBJETOS'
  }),
  (palavra029 = {
    nome: 'CORTINA',
    categoria: 'OBJETOS'
  }),
  (palavra030 = {
    nome: 'LAPIS',
    categoria: 'OBJETOS'
  }),
  (palavra031 = {
    nome: 'MELANCIA',
    categoria: 'ALIMENTOS'
  }),
  (palavra032 = {
    nome: 'AMENDOIM',
    categoria: 'ALIMENTOS'
  }),
  (palavra033 = {
    nome: 'ESFIRRA',
    categoria: 'ALIMENTOS'
  }),
  (palavra034 = {
    nome: 'GOROROBA',
    categoria: 'ALIMENTOS'
  }),
  (palavra035 = {
    nome: 'MACARRAO',
    categoria: 'ALIMENTOS'
  }),
  (palavra036 = {
    nome: 'PICANHA',
    categoria: 'ALIMENTOS'
  }),
  (palavra037 = {
    nome: 'SALADA',
    categoria: 'ALIMENTOS'
  }),
  (palavra038 = {
    nome: 'COXINHA',
    categoria: 'ALIMENTOS'
  }),
  (palavra039 = {
    nome: 'ABACATE',
    categoria: 'ALIMENTOS'
  }),
  (palavra040 = {
    nome: 'ARROZ',
    categoria: 'ALIMENTOS'
  }),
  (palavra040 = {
    nome: 'DRAGAO',
    categoria: 'ANIMAIS'
  }),
  (palavra041 = {
    nome: 'GALINHA',
    categoria: 'ANIMAIS'
  }),
  (palavra042 = {
    nome: 'PAVAO',
    categoria: 'ANIMAIS'
  }),
  (palavra043 = {
    nome: 'CAMELO',
    categoria: 'ANIMAIS'
  }),
  (palavra044 = {
    nome: 'PERU',
    categoria: 'ANIMAIS'
  }),
  (palavra045 = {
    nome: 'ZEBRA',
    categoria: 'ANIMAIS'
  }),
  (palavra046 = {
    nome: 'DROMEDARIO',
    categoria: 'ANIMAIS'
  }),
  (palavra047 = {
    nome: 'CALANGO',
    categoria: 'ANIMAIS'
  }),
  (palavra048 = {
    nome: 'SAGUI',
    categoria: 'ANIMAIS'
  }),
  (palavra049 = {
    nome: 'LAGARTIXA',
    categoria: 'ANIMAIS'
  }),
  (palavra050 = {
    nome: 'HIPOPOTAMO',
    categoria: 'ANIMAIS'
  }),
  (palavra051 = {
    nome: 'A ERA DO GELO',
    categoria: 'TV E CINEMA'
  }),
  (palavra052 = {
    nome: 'HOMEM ARANHA',
    categoria: 'TV E CINEMA'
  }),
  (palavra053 = {
    nome: 'CASA MONSTRO',
    categoria: 'TV E CINEMA'
  }),
  (palavra054 = {
    nome: 'TELA QUENTE',
    categoria: 'TV E CINEMA'
  }),
  (palavra055 = {
    nome: 'STRANGER THINGS',
    categoria: 'TV E CINEMA'
  }),
  (palavra056 = {
    nome: 'O REI DO GADO',
    categoria: 'TV E CINEMA'
  }),
  (palavra057 = {
    nome: 'MULHER MARAVILHA',
    categoria: 'TV E CINEMA'
  }),
  (palavra058 = {
    nome: 'O INCRIVEL HULK',
    categoria: 'TV E CINEMA'
  }),
  (palavra059 = {
    nome: 'BOB ESPONJA',
    categoria: 'TV E CINEMA'
  }),
  (palavra060 = {
    nome: 'PANICO NA TV',
    categoria: 'TV E CINEMA'
  }),
  (palavra061 = {
    nome: 'MASTIGAR',
    categoria: 'ACÃO'
  }),
  (palavra062 = {
    nome: 'PATRULHAR',
    categoria: 'ACÃO'
  }),
  (palavra063 = {
    nome: 'ATACAR',
    categoria: 'ACÃO'
  }),
  (palavra064 = {
    nome: 'ENGOLIR',
    categoria: 'ACÃO'
  }),
  (palavra065 = {
    nome: 'NADAR',
    categoria: 'ACÃO'
  }),
  (palavra066 = {
    nome: 'PULAR',
    categoria: 'ACÃO'
  }),
  (palavra067 = {
    nome: 'CORRER',
    categoria: 'ACÃO'
  }),
  (palavra068 = {
    nome: 'AMAR',
    categoria: 'ACÃO'
  }),
  (palavra069 = {
    nome: 'CORTAR',
    categoria: 'ACÃO'
  }),
  (palavra070 = {
    nome: 'OLHAR',
    categoria: 'ACÃO'
  }),
  (palavra071 = {
    nome: 'PARAFRAZEAR',
    categoria: 'ACÃO'
  }),
  (palavra072 = {
    nome: 'CONVERSAR',
    categoria: 'ACÃO'
  }),
  (palavra073 = {
    nome: 'ABRAÇAR',
    categoria: 'ACÃO'
  }),
  (palavra074 = {
    nome: 'BEIJAR',
    categoria: 'ACÃO'
  }),
  (palavra075 = {
    nome: 'CARREGAR',
    categoria: 'ACÃO'
  })
]

function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length)
  palavraSecretaSorteada = palavras[indexPalavra].nome
  palavraSecretaCategoria = palavras[indexPalavra].categoria
}
criarPalavraSecreta()

let tracoDinamico = []
function montarPalavraNaTela() {
  const palavraTela = document.querySelector('#palavra-secreta')
  palavraTela.innerHTML = ''

  const categoria = document.querySelector('#categoria')
  categoria.innerHTML = palavraSecretaCategoria

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (tracoDinamico[i] == undefined) {
      if (palavraSecretaSorteada[i] == '') {
        tracoDinamico[i] = ''
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letrasEspaco'>" +
          tracoDinamico[i] +
          '</p>'
      } else {
        tracoDinamico[i] = '&nbsp;'
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letras'>" +
          tracoDinamico[i] +
          '</p>'
      }
    } else {
      if (palavraSecretaSorteada[i] == ' ') {
        tracoDinamico[i] = ' '
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letrasEspaco'>" +
          tracoDinamico[i] +
          '</p>'
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<p class='letras'>" +
          tracoDinamico[i] +
          '</p>'
      }
    }
  }
}
montarPalavraNaTela()

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

let tentativas = 6

function verificaLetraEscolhida(letra) {
  if (tentativas > 0) {
    comparalistas(letra)
    montarPalavraNaTela()
    mudarStyleLetra('#tecla-' + letra)
    setTimeout(() => {
      mostrarLetraIncorretaNaTela()
    }, 100)
  }
}

let letraCapturadaMouse = document.addEventListener('click', e => {
  letraCapturadaMouse = e.target.value
  
})

// Função que captura a letra digitada no input e verifica se a letra existe na palavra secreta
let letraInput = document.getElementById('input-letra').value
let letraInputMaiuscula = letraInput.toUpperCase()
console.log(letraInputMaiuscula)
function buscaInput() {
  letraInput = document.getElementById('input-letra').value = ''
  verificaLetraEscolhida(letraInputMaiuscula)
  letraInputMaiuscula = ''  
}

function mudarStyleLetra(tecla) {
  setTimeout(() => {
    if (
      palavraSecretaSorteada.indexOf(
        letraCapturadaMouse || letraEscolhidaTeclado
      ) >= 0
    ) {
      document.querySelector(tecla).style.background = '#10E93F'
      document.querySelector(tecla).style.color = '#ffffff'
    } else if (
      palavraSecretaSorteada.indexOf(
        letraCapturadaMouse || letraEscolhidaTeclado
      ) == -1
    ) {
      document.querySelector(tecla).style.background = '#FF0000'
      letrasIncorretas.push(letraCapturadaMouse || letraEscolhidaTeclado)
    }
  }, 100)
}

let posicao = ''

function comparalistas(letra) {
  posicao = palavraSecretaSorteada.indexOf(letra)
  if (posicao < 0) {
    tentativas--
    carregaImagemForca()

    if (tentativas == 0) {
      abreModal(
        `OPS!, "Não foi dessa vez ... A palavra secreta era + ${palavraSecretaSorteada}`
      )
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        tracoDinamico[i] = letra
      }
    }
  }

  let vitoria = true
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != tracoDinamico[i]) {
      vitoria = false
    }
  }

  if (vitoria == true) {
    alterarFundo()
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
  if (letrasIncorretas.length > 0) {
    sectionLetrasErradas.style.display = 'block'
    letraNaTela.innerHTML =
      letraNaTela.innerHTML + '<p>' + letrasIncorretas + '</p>'
    letrasIncorretas = letrasIncorretas.slice(0, -1)
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
