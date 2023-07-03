const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    if (query) {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = url;
    }
  }
});


searchButton.addEventListener('click', function() {
    const query = searchInput.value;
    if (query) {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = url;
    }
  });