document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const movieGrid = document.getElementById('movieGrid');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeButton = document.querySelector('.close-button');

    let moviesData = [];

    // Function to fetch movie data from JSON
    async function fetchMovies() {
        try {
            const response = await fetch('data.json');
            moviesData = await response.json();
            displayMovies(moviesData);
        } catch (error) {
            console.error('Error fetching movies:', error);
            movieGrid.innerHTML = '<p>Failed to load movies.</p>';
        }
    }

    // Function to display movies in the grid
    function displayMovies(movies) {
        movieGrid.innerHTML = '';
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');

            movieItem.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
                <div class="movie-details">
                    <h2 class="movie-title">${movie.title}</h2>
                    <p class="movie-description">${movie.description}</p>
                    <a href="#" class="play-button" data-video="${movie.videoLink}">Play</a>
                </div>
            `;
            movieGrid.appendChild(movieItem);
        });
    }

    // Function to open the video modal
    function openVideoModal(videoLink) {
        videoPlayer.innerHTML = `<iframe src="${videoLink}" frameborder="0" allowfullscreen></iframe>`;
        videoModal.style.display = 'block';
    }

    // Function to close the video modal
    function closeVideoModal() {
        videoPlayer.innerHTML = '';
        videoModal.style.display = 'none';
    }

    // Event listener for the play button
    movieGrid.addEventListener('click', function (event) {
        if (event.target.classList.contains('play-button')) {
            event.preventDefault();
            const videoLink = event.target.getAttribute('data-video');
            openVideoModal(videoLink);
        }
    });

    // Event listener for the close button
    closeButton.addEventListener('click', closeVideoModal);

    // Event listener for closing the modal when clicking outside the modal
    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });

    // Event listener for the search bar
    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredMovies = moviesData.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies);
    });

    // Initial fetch of movies
    fetchMovies();
});
