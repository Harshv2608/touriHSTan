// Ensure only one definition for showPage
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Define the list of cities globally
const cities = ['mumbai', 'delhi', 'bangalore', 'kolkata', 'chennai', 'kashmir', 'kerala', 'assam', 'ahmedabad', 'ladakh', 'jaipur', 'hyderabad'];

function showSearchResults() {
    const query = document.getElementById('city-search').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query) {
        const filteredCities = cities.filter(city => city.includes(query));

        if (filteredCities.length > 0) {
            filteredCities.forEach(city => {
                const resultDiv = createResultDiv(city);
                resultsContainer.appendChild(resultDiv);
            });
        } else {
            showNoResultsMessage(resultsContainer);
        }
    }
}

// Helper function to create result div for each city
function createResultDiv(city) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'search-result';
    resultDiv.textContent = city.charAt(0).toUpperCase() + city.slice(1); // Capitalize first letter
    resultDiv.onclick = () => showPage(`${city}-packages`);
    return resultDiv;
}

// Helper function to show a "No results found" message
function showNoResultsMessage(container) {
    const noResultDiv = document.createElement('div');
    noResultDiv.className = 'no-results';
    noResultDiv.textContent = 'No results found';
    container.appendChild(noResultDiv);
}
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.custom-image-slider');
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.custom-slide');
        const prevButton = slider.querySelector('.custom-prev');
        const nextButton = slider.querySelector('.custom-next');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        prevButton.addEventListener('click', showPrevSlide);
        nextButton.addEventListener('click', showNextSlide);

        showSlide(currentIndex); // Show the first slide initially
    });
});
