var list = document.querySelector('.albums-list');

list.addEventListener('click', function(e) {
  if (document.querySelector('.album-card.active')) document.querySelector('.album-card.active').classList.remove('active');
  else e.target.parentElement.classList.add('active');
});