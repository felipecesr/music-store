(function() {
    function request(url) {
    var xhr = new XMLHttpRequest();
      
    xhr.open("GET", url);
    
    xhr.send();
    
    if (xhr.readyState === 4 && xhr.status === 200) return xhr.responseText;
  }

  function createList(album) {
    
    var itens = JSON.parse(request('/' + album + '.json'));

    itens.tracks.forEach(function(e) {
      '<tr><td>' + e + '</td></tr>';
    });

    var el = document.createElement('div');

    el.className = "album-page";

    el.textContent = album;

    return el;

  }
}());