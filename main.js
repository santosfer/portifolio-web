const textoInteresses = {
    'icone-espiritualidade':'Espiritualidade, meditação, conhecimentos sobre a alma e a vida me interessam bastante.',
    'icone-viagem':'Adoro viajar e conhecer culturas novas. Realizei um sonho em ir pra Londres em 2022, espero em breve conhecer mais países.',
    'icone-series': 'No momento minha série favorita é "Ted Lasso" mas adoro uma boa maratona de séries.',
    'icone-idiomas':'Adoro saber um pouco sobre linguagem, aprendi Inglês sozinha e já estudei um pouco de francês, espanhol e japonês.',
    'icone-desenho': 'Gosto de desenhar, já participei de uma feira de xilogravura e geralmente é o que gosto de fazer para me distrair.'
}

const itens = document.querySelectorAll('.icone-int')

for (let i = 0; i<itens.length;i++){
    const item = itens[i]
    let idItem = item.id

    item.onclick = function(){
        mostraTexto(idItem)
    }
}

function mostraTexto(idItem){
    let texto = document.querySelector('#texto-interesse')
    console.log(texto)

    texto.innerHTML = textoInteresses[idItem]
}

// menu mobile//
const menu = document.querySelector('.menu')
const btnMenuOpen = document.querySelector('.btnMenu_open')
const btnMenuClose = document.querySelector('.btnMenu_close')

btnMenuOpen.addEventListener('click', function(){
    menu.classList.add('menu_open')
})

btnMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu_open')
})