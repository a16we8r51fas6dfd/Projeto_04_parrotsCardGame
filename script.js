let qtdCards = 0
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

function clickCard(card) {
    console.log('help')

    const front = card.querySelector(".card .front-face")
    const back = card.querySelector(".card .back-face")

    front.classList.add("viradinha")
    back.classList.add("viradinha")

}

quantidadeDeCartas()