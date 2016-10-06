'use strict'

document.addEventListener('click', function(e) {
  
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active');
  }

  if (e.target.className === 'image') {
    e.target.parentElement.classList.add('active');
  }

});

// function request(url) {
//   var xhr = new XMLHttpRequest();
     
//   xhr.open("GET", url);
  
//   xhr.send();
  
//   if (xhr.readyState === 4 && xhr.status === 200) return xhr.responseText;
// }

// function createList(album) {
  
//   var itens = JSON.parse(request('/' + album + '.json'));

//   itens.tracks.forEach(function(e) {
//     '<tr><td>' + e + '</td></tr>';
//   });

//   var el = document.createElement('div');

//   el.className = "album-page";

//   el.textContent = album;

//   return el;

// }