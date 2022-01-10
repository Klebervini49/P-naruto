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
    document.querySelector('.img').setAttribute('src', personagens[0].img)
})
BtnSasuke.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[1].nome;
    document.querySelector('#desc').innerHTML = personagens[1].desc;
    document.querySelector('.img').setAttribute('src', personagens[1].img)
})
BtnSakura.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[2].nome;
    document.querySelector('#desc').innerHTML = personagens[2].desc;
    document.querySelector('.img').setAttribute('src', personagens[2].img)
})
BtnJiraiya.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[3].nome;
    document.querySelector('#desc').innerHTML = personagens[3].desc;
    document.querySelector('.img').setAttribute('src', personagens[3].img)
})
BtnKakashi.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[4].nome;
    document.querySelector('#desc').innerHTML = personagens[4].desc;
    document.querySelector('.img').setAttribute('src', personagens[4].img)
})
BtnItachi.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[5].nome;
    document.querySelector('#desc').innerHTML = personagens[5].desc;
    document.querySelector('.img').setAttribute('src', personagens[5].img)
})
BtnHinata.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[6].nome;
    document.querySelector('#desc').innerHTML = personagens[6].desc;
    document.querySelector('.img').setAttribute('src', personagens[6].img)
})
BtnOrochi.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[7].nome;
    document.querySelector('#desc').innerHTML = personagens[7].desc;
    document.querySelector('.img').setAttribute('src', personagens[7].img)
})
BtnPain.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = personagens[8].nome;
    document.querySelector('#desc').innerHTML = personagens[8].desc;
    document.querySelector('.img').setAttribute('src', personagens[8].img)
})