var elCards = document.querySelectorAll('.card')


elCards.forEach( function (elCard) {
  elCard.addEventListener('click', function () {
    removeActiveClass();
    elCard.classList.add('card-active');
  })
})



function removeActiveClass () {
  elCards.forEach( function (elCard) {
    elCard.classList.remove('card-active')
  })
}