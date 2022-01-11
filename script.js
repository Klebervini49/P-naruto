// Armazenando os botões dos personagens em variáveis 
let BtnNaruto = document.querySelector('.buttonNaruto'),
    BtnSasuke = document.querySelector('.buttonSasuke'),
    BtnSakura = document.querySelector('.buttonSakura'),
    BtnJiraiya = document.querySelector('.buttonJiraiya'),
    BtnKakashi = document.querySelector('.buttonKakashi'),
    BtnItachi = document.querySelector('.buttonItachi'),
    BtnHinata = document.querySelector('.buttonHinata'),
    BtnOrochi = document.querySelector('.buttonOrochi'),
    BtnPain = document.querySelector('.buttonPain');

// Usando as variáveis para mudar os conteudos 
BtnNaruto.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[0].nome;
    document.querySelector('#desc').innerHTML = personagens[0].desc;
    document.querySelector('.img').setAttribute('alt', personagens[0].alt)
    document.querySelector('.img').setAttribute('src', personagens[0].img)
    document.querySelector('.img').style.display = 'block'
})
BtnSasuke.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[1].nome;
    document.querySelector('#desc').innerHTML = personagens[1].desc;
    document.querySelector('.img').setAttribute('alt', personagens[1].alt)
    document.querySelector('.img').setAttribute('src', personagens[1].img)
    document.querySelector('.img').style.display = 'block'
})
BtnSakura.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[2].nome;
    document.querySelector('#desc').innerHTML = personagens[2].desc;
    document.querySelector('.img').setAttribute('alt', personagens[2].alt)
    document.querySelector('.img').setAttribute('src', personagens[2].img)
    document.querySelector('.img').style.display = 'block'
})
BtnJiraiya.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[3].nome;
    document.querySelector('#desc').innerHTML = personagens[3].desc;
    document.querySelector('.img').setAttribute('alt', personagens[3].alt)
    document.querySelector('.img').setAttribute('src', personagens[3].img)
    document.querySelector('.img').style.display = 'block'
})
BtnKakashi.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[4].nome;
    document.querySelector('#desc').innerHTML = personagens[4].desc;
    document.querySelector('.img').setAttribute('alt', personagens[4].alt)
    document.querySelector('.img').setAttribute('src', personagens[4].img)
    document.querySelector('.img').style.display = 'block'
})
BtnItachi.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[5].nome;
    document.querySelector('#desc').innerHTML = personagens[5].desc;
    document.querySelector('.img').setAttribute('alt', personagens[5].alt)
    document.querySelector('.img').setAttribute('src', personagens[5].img)
    document.querySelector('.img').style.display = 'block'
})
BtnHinata.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[6].nome;
    document.querySelector('#desc').innerHTML = personagens[6].desc;
    document.querySelector('.img').setAttribute('alt', personagens[6].alt)
    document.querySelector('.img').setAttribute('src', personagens[6].img)
    document.querySelector('.img').style.display = 'block'
})
BtnOrochi.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[7].nome;
    document.querySelector('#desc').innerHTML = personagens[7].desc;
    document.querySelector('.img').setAttribute('alt', personagens[7].alt)
    document.querySelector('.img').setAttribute('src', personagens[7].img)
    document.querySelector('.img').style.display = 'block'
})
BtnPain.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[8].nome;
    document.querySelector('#desc').innerHTML = personagens[8].desc;
    document.querySelector('.img').setAttribute('alt', personagens[8].alt)
    document.querySelector('.img').setAttribute('src', personagens[8].img)
    document.querySelector('.img').style.display = 'block'
})
