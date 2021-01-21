var elCards = document.querySelectorAll('.card');
var elCon = document.querySelector('.container');

elCards.forEach( function (elcard) {
  elcard.addEventListener('click', function () {
    removelist();
    elcard.classList.add('card-active');
  })
})

function removelist () {
  elCards.forEach( function (card) {
    card.classList.remove('card-active')
  })
}