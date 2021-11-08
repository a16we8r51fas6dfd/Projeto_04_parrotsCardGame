let pontuacao = 0
let tentativas = 0
let qtdCards = 14
const figuras = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']
let figurasDuplicadas = []

function comparador() {
    return Math.random() - 0.5;
}

function duplicarEmbaralharFiguras() {
    figuras.sort(comparador)

    for (let i = 0; i < qtdCards/2; i++) {
        figurasDuplicadas.push(figuras[i])
        figurasDuplicadas.push(figuras[i])
    }

    figurasDuplicadas.sort(comparador)
}


function quantidadeDeCartas() {
    while (qtdCards % 2 !== 0 || qtdCards < 4 || qtdCards > 14) {
        qtdCards = prompt("quantas cartas?")
    }

    duplicarEmbaralharFiguras()
    darCartas()
}

function darCartas() {
    console.log(figurasDuplicadas)
    const cartas = document.querySelector(".cards-container")


    for (let i = 0; i <= qtdCards -1 ; i++) {
    
        cartas.innerHTML += `
        <div onclick="clickCard(this)" class="card" data-identifier="card">
            <div class="front-face face" data-identifier="back-face">
                <img src="./images/front.png">
            </div>
            <div class="back-face face" data-identifier="front=face">
                <img src="./images/${figurasDuplicadas[i]}.gif">
            </div>
        </div>
        `
    }
    
}

let primeiraCarta = null
let segundaCarta = null

let arrayComparacao = []

const todasAsCartas = document.querySelector(".cards-container")

function clickCard(card) {

    
    const front = card.querySelector(".card .front-face")
    const back = card.querySelector(".card .back-face")


    if (primeiraCarta === null ) {
        primeiraCarta = back.innerHTML

        arrayComparacao.push(back.parentNode)

        back.classList.add("viradinha")
        front.classList.add("viradinha")

        arrayComparacao[0].classList.add("disable-click")

    } else if (segundaCarta === null) {
        segundaCarta = back.innerHTML 

        arrayComparacao.push(back.parentNode)
        
        back.classList.add("viradinha")
        front.classList.add("viradinha")
        
        arrayComparacao[1].classList.add("disable-click")

    }

    if (primeiraCarta !== null && segundaCarta!== null && arrayComparacao[0] !== arrayComparacao[1]) {

        if (primeiraCarta == segundaCarta) {
            
            arrayComparacao = []
            pontuacao ++
            tentativas ++

        } else {
            todasAsCartas.classList.add("disable-click")
            setTimeout(desviradinha, 1000)
            tentativas ++

        }

        primeiraCarta = null
        segundaCarta = null
    }

    if (pontuacao === qtdCards/2) {
        alert(`Você ganhou em ${tentativas} jogadas`)
    }

}

function desviradinha() {

    let cardBack1 = arrayComparacao[0].querySelector(".back-face")
    let cardFront1 = arrayComparacao[0].querySelector(".front-face")
    let cardBack2 = arrayComparacao[1].querySelector(".back-face")
    let cardFront2 = arrayComparacao[1].querySelector(".front-face")

    cardBack1.classList.remove("viradinha")
    cardFront1.classList.remove("viradinha")
    cardBack2.classList.remove("viradinha")
    cardFront2.classList.remove("viradinha")

    cardBack1.parentNode.classList.remove("disable-click")
    cardFront1.parentNode.classList.remove("disable-click")
    cardBack2.parentNode.classList.remove("disable-click")
    cardFront2.parentNode.classList.remove("disable-click")


    primeiraCarta = null
    segundaCarta = null

    todasAsCartas.classList.remove("disable-click")

    arrayComparacao = []
}




quantidadeDeCartas()