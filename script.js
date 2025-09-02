document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const movieGrid = document.getElementById('movieGrid');
    const tvSeriesGrid = document.getElementById('tvSeriesGrid');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeButton = document.querySelector('.close-button');

    let moviesData = [];
    let tvSeriesData = [];

    // Function to fetch data from JSON
    async function fetchData() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            moviesData = data.movies;
            tvSeriesData = data.tvSeries;
            displayMovies(moviesData, movieGrid);
            displayTVSeries(tvSeriesData, tvSeriesGrid);
        } catch (error) {
            console.error('Error fetching data:', error);
            movieGrid.innerHTML = '<p>Failed to load movies.</p>';
            tvSeriesGrid.innerHTML = '<p>Failed to load TV series.</p>';
        }
    }

    // Function to display movies in the grid
    function displayMovies(movies, grid) {
        grid.innerHTML = '';
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
            grid.appendChild(movieItem);
        });
    }

    // Function to display TV series in the grid
    function displayTVSeries(tvSeries, grid) {
        grid.innerHTML = '';
        tvSeries.forEach(series => {
            const seriesItem = document.createElement('div');
            seriesItem.classList.add('movie-item');

            seriesItem.innerHTML = `
                <img src="${series.poster}" alt="${series.title}" class="movie-poster">
                <div class="movie-details">
                    <h2 class="movie-title">${series.title}</h2>
                    <p class="movie-description">${series.description}</p>
                    <a href="#" class="play-button" data-video="${series.videoLink}">Play</a>
                </div>
            `;
            grid.appendChild(seriesItem);
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
    document.getElementById('content').addEventListener('click', function (event) {
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
        const filteredTVSeries = tvSeriesData.filter(series => series.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies, movieGrid);
        displayTVSeries(filteredTVSeries, tvSeriesGrid);
    });

    // Initial fetch of data
    fetchData();
});
