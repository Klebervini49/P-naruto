function naruto(){
    document.querySelector('.nome').classList.remove('sasuke', 'sakura', 'kakashi', 'itachi', 'hinata', 'orochi', 'pain', 'jiraiya')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'Naruto Uzumaki'
    document.querySelector('#desc').innerHTML = '<b>Naruto Uzumaki</b> é apresentado como um jovem rapaz loiro, cabelos arrepiados e olhos azuis. Ele frequentemente veste uma jaqueta laranja. Após a sua graduação ninja ele começa a usar um protetor de testa que denota a sua posição como um ninja da Vila Oculta da Folha.'
    document.querySelector('.button1').classList.add('active')
    document.querySelector('.nome').classList.add('naruto')
    
}
function sasuke(){
    document.querySelector('.nome').classList.remove('sakura', 'kakashi', 'naruto', 'itachi', 'hinata', 'orochi', 'pain', 'jiraiya')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'sasuke uchiha'
    document.querySelector('#desc').innerHTML = '<b>Sasuke Uchiha</b> é um ninja de pele clara que tem olhos ônix e cabelos preto na altura do queixo. Seu cabelo é espetado nas costas com franjas que crescem com o avançar da história. Quando criança, sua franja ficava pendurada acima de seus olhos.'
    document.querySelector('.button2').classList.add('active')
    document.querySelector('.nome').classList.add('sasuke')
}
function sakura(){
    document.querySelector('.nome').classList.remove('sasuke', 'kakashi', 'naruto', 'itachi', 'hinata', 'orochi', 'pain', 'jiraiya')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'sakura haruno'
    document.querySelector('#desc').innerHTML = '<b>Sakura Haruno</b> é uma garota inteligente, forte e decidida. A sua principal característica é o seu amor em relação à Sasuke Uchiha desde o início da série, e mesmo esse tendo se tornado uma criminoso, ela ainda mostra ter afeto por ele.'
    document.querySelector('.button3').classList.add('active')
    document.querySelector('.nome').classList.add('sakura')
}
function jiraiya(){
    document.querySelector('.nome').classList.remove('sasuke', 'kakashi', 'naruto', 'itachi', 'hinata','sakura', 'orochi', 'pain')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'jiraiya'
    document.querySelector('#desc').innerHTML = '<b>Jiraiya</b> foi um dos Sannin Lendários, junto com Tsunade e Orochimaru, treinados por Hiruzen Sarutobi. Ele era um auto-proclamado super-pervertido, e o escritor da popular série de livros de ficção para adultos, chamado Icha Icha. Ele também era conhecido como o Sábio dos Sapos, por causa da sua assinatura de invocação de sapos, e por seu status como sábio.'
    document.querySelector('.button4').classList.add('active')
    document.querySelector('.nome').classList.add('jiraiya')
}
function kakashi(){
    document.querySelector('.nome').classList.remove('sasuke', 'sakura', 'naruto', 'itachi', 'hinata', 'orochi', 'pain', 'jiraiya')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'Kakashi Hatake'
    document.querySelector('#desc').innerHTML = '<b>Kakashi Hatake</b> é um shinobi de Konohagakure. Ele recebeu um Sharingan de seu ex-companheiro de equipe, Obito Uchiha, quando era mais jovem, fazendo-o ser conhecido como Kakashi o Ninja Copiador.'
    document.querySelector('.button5').classList.add('active')
    document.querySelector('.nome').classList.add('kakashi')
}
function itachi(){
    document.querySelector('.nome').classList.remove('sasuke', 'sakura', 'kakashi', 'naruto', 'hinata', 'orochi', 'pain', 'jiraiya')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'Itachi Uchiha'
    document.querySelector('#desc').innerHTML = '<b>Itachi Uchiha</b> foi um prodígio do clã Uchiha de Konohagakure. Ele se tornou um criminoso internacional depois de assassinar seu clã inteiro, poupando apenas seu irmão mais novo, Sasuke. Ele se juntou a Akatsuki, onde ele entrou em frequentes conflitos com Konoha e seus ninjas, incluindo Sasuke, que procurou vingar sua família. Depois de morrer durante uma batalha com Sasuke, as motivações de Itachi foram reveladas serem mais complicadas do que pareciam ele só queria proteger seu irmão e a vila, permanecendo um shinobi leal a Konohagakure até o fim.'
    document.querySelector('.button6').classList.add('active')
    document.querySelector('.nome').classList.add('itachi')
}
function hinata(){
    document.querySelector('.nome').classList.remove('sasuke', 'sakura', 'kakashi', 'itachi', 'naruto', 'orochi', 'pain', 'jiraiya')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'hinata Hyūga'
    document.querySelector('#desc').innerHTML = '<b>Hinata Uzumaki</b> é a maior personagem de assistência da série. Ela é um membro dos clãs Hyūga e Uzumaki de Konohagakure. Tendo um temperamento humilde, a falta de auto-confiança de Hinata era refletida em suas habilidades — traços que fizeram seu pai considerar que ela não era adequada para a sua posição como herdeira do clã. A partir de suas observações com relação a Naruto Uzumaki, Hinata encontra tanto um exemplo a seguir para ser mais assertiva, como uma pessoa para amar. Em sua filiação com o Time Kurenai, ela procura mudar e se tornar forte, mesmo sendo um pouco de cada vez.'
    document.querySelector('.button7').classList.add('active')
    document.querySelector('.nome').classList.add('hinata')
}
function orochi(){
    document.querySelector('.nome').classList.remove('sasuke', 'sakura', 'kakashi', 'itachi', 'naruto', 'hinata', 'pain', 'jiraiya')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button9').classList.remove('active')
    document.querySelector('#name').innerHTML = 'Orochimaru'
    document.querySelector('#desc').innerHTML = '<b>Orochimaru</b> é um dos Lendários Sannin, junto com Tsunade e Jiraiya, de Konohagakure. Com sua ambição de vida sendo aprender todos os segredos do mundo, Orochimaru buscou a imortalidade para que ele pudesse viver todas as vidas necessárias para realizar sua tarefa. Depois de ser pego em flagrante realizando experimentos antiéticos sobre seus concidadãos por causa desta imortalidade, Orochimaru desertou de Konoha, passando a ser perseguido por suas ambições, e por muitos anos procurou a destruição da aldeia, a fim de se vingar e demonstrar o que ele tinha aprendido.'
    document.querySelector('.button8').classList.add('active')
    document.querySelector('.nome').classList.add('orochi')
}
function pain(){
    document.querySelector('.nome').classList.remove('sasuke', 'sakura', 'kakashi', 'itachi', 'naruto', 'hinata', 'orochi', 'jiraiya')
    document.querySelector('.button1').classList.remove('active')
    document.querySelector('.button2').classList.remove('active')
    document.querySelector('.button3').classList.remove('active')
    document.querySelector('.button4').classList.remove('active')
    document.querySelector('.button5').classList.remove('active')
    document.querySelector('.button6').classList.remove('active')
    document.querySelector('.button7').classList.remove('active')
    document.querySelector('.button8').classList.remove('active')
    document.querySelector('#name').innerHTML = 'Nagato (Pain)'
    document.querySelector('#desc').innerHTML = '<b>Nagato</b> foi um órfão de Amegakure e um aluno de Jiraiya, que cresceu durante a Segunda Guerra Mundial Shinobi. Órfão pelo conflito, Nagato se uniu juntamente com seus companheiros órfãos de guerra para formar a Akatsuki, uma organização cujos objetivos foram parar os ciclos infinitos de morte. Depois de seu amigo e líder, Yahiko, ser morto por pregar a paz, Nagato se convenceu de que o mundo nunca iria parar de lutar voluntariamente a menos que ele conheça o que é a verdadeira dor. Ele adotou o pseudônimo de Pain (ペイン, Pein) e foi o novo líder da Akatsuki na tentativa de mudar o mundo a um estado de paz através do medo da destruição pelas mãos da Akatsuki.'
    document.querySelector('.button9').classList.add('active')
    document.querySelector('.nome').classList.add('pain')
}