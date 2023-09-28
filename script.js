const accessKey = "CRYTNL8d6CAjIHO7odaZQI5epud65dtzNjp-InCVdIk";

const formEl = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results"); // Corrected class name
const searchMore = document.getElementById("search-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => { // Changed .map() to .forEach()
    const imageCover = document.createElement('div');
    imageCover.classList.add("search-result");
    const image = document.createElement('img');
    image.src = result.urls.small; // Changed "results" to "result"
    image.alt = result.alt_description; // Changed "results" to "result"
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html; // Changed "results" to "result"
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description; // Changed "results" to "result"

    imageCover.appendChild(image); // Changed "appendchild" to "appendChild"
    imageCover.appendChild(imageLink); // Added this line to append imageLink
    searchResults.appendChild(imageCover);

    page++;
    if (page > 1) {
      searchMore.style.display = "block";
    }
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

searchMore.addEventListener("click", () => {
  searchImages();
});

const typed = new Typed(".typing", {
  strings: ["A <span class='gradient-text'>NATURE PIC!</span>", "A <span class='gradient-text'>TRAVEL PIC!</span>", "A <span class='gradient-text'>DANCING PIC!</span> "],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  contentType: 'html' // This ensures that HTML tags are interpreted
});
