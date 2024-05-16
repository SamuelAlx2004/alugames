function alterarStatus(id) {
   let gameClicado = document.getElementById(`game-${id}`) ;
   let imagem = gameClicado.querySelector('.dashboard__item__img');
   let batao = gameClicado.querySelector('.dashboard__item__button');

   if (imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    batao.classList.remove('dashboard__item__button--return')
    batao.textContent = 'Alugar'
   } else {
    imagem.classList.add('dashboard__item__img--rented')
    batao.classList.add('dashboard__item__button--return')
    batao.textContent = 'Devolver'
   }
}