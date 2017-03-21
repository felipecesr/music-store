(function() {
  'use strict'

  document.addEventListener('click', function(e) {
    
    if (document.querySelector('.active')) {
      document.querySelector('.active').classList.remove('active');
    }

    if (e.target.className === 'image') {
      e.target.parentElement.classList.add('active');
    }

  });
}());
