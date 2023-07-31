const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchIcon = document.getElementById('search-icon');
let currentSearchEngine = 0;

const searchEngines = [ // Move your primary search engine to the top if you want it to be selected by default
  { url: 'https://www.startpage.com/sp/search', icon: './img/search-startpage.png' }, 
  { url: 'https://search.brave.com/search?q=', icon: './img/search-brave.png' },
  { url: 'https://duckduckgo.com/?t=h_&q=', icon: './img/search-ddg.png' },
  { url: 'https://www.google.com/search?q=', icon: './img/search-google.png' },
  { url: 'https://www.bing.com/search?q=', icon: './img/search-bing.png' },
  { url: 'https://search.yahoo.com/search?q=', icon: './img/search-yahoo.png' },
];

function updateSearchIcon() {
  searchIcon.src = searchEngines[currentSearchEngine].icon;
}

function performSearch() {
  const query = searchInput.value;
  if (query) {
    const url = searchEngines[currentSearchEngine].url + encodeURIComponent(query);
    window.location.href = url;
  }
}

searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

searchButton.addEventListener('click', function () {
  currentSearchEngine = (currentSearchEngine + 1) % searchEngines.length;
  updateSearchIcon();
});

// Set the initial search icon
updateSearchIcon();
