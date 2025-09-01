document.addEventListener('DOMContentLoaded', () => {
    // Data for the movie cards. In a real app, this would come from an API.
    const movies = [
        {
            title: 'Jurassic World Rebo...',
            year: 2025,
            runtime: '0 min',
            poster: 'https://i.imgur.com/u5I6rqP.png',
            isHD: true,
            ageRating: null
        },
        {
            title: 'Gold Rush Game',
            year: 2025,
            runtime: '120 min',
            poster: 'https://i.imgur.com/83pA89m.png',
            isHD: true,
            ageRating: '16+'
        },
        {
            title: 'Mission: Impossible Fi...',
            year: 2025,
            runtime: '0 min',
            poster: 'https://i.imgur.com/QpBiqgT.png',
            isHD: true,
            ageRating: 'PG'
        },
        {
            title: 'Fall for Me',
            year: 2025,
            runtime: '103 min',
            poster: 'https://i.imgur.com/rNNO2gL.png',
            isHD: true,
            ageRating: '13+'
        },
        {
            title: 'How to Train Your Dragon 2',
            year: 2025,
            runtime: '129 min',
            poster: 'https://i.imgur.com/e5pIARs.png',
            isHD: true,
            ageRating: null
        },
        {
            title: 'MAXXX',
            year: 2025,
            runtime: '133 min',
            poster: 'https://i.imgur.com/39wH8b2.png',
            isHD: true,
            ageRating: '18+'
        },
        {
            title: 'Krew Demonic Runners',
            year: 2025,
            runtime: '0 min',
            poster: 'https://i.imgur.com/w464g1G.png',
            isHD: false,
            ageRating: '18+'
        },
        {
            title: 'F1: The Movie',
            year: 2025,
            runtime: '156 min',
            poster: 'https://i.imgur.com/jE61wKa.png',
            isHD: true,
            ageRating: null
        },
        {
            title: 'I Know What You Did L...',
            year: 2025,
            runtime: '111 min',
            poster: 'https://i.imgur.com/0uQ5Y9r.png',
            isHD: true,
            ageRating: '18+'
        },
        {
            title: 'Together',
            year: 2025,
            runtime: '102 min',
            poster: 'https://i.imgur.com/M5o2h7W.png',
            isHD: false,
            ageRating: '18+'
        },
        {
            title: 'F1',
            year: 2025,
            runtime: '0 min',
            poster: 'https://i.imgur.com/DYZg7JN.png',
            isHD: true,
            ageRating: '13+'
        },
        {
            title: 'Osiris',
            year: 2025,
            runtime: '105 min',
            poster: 'https://i.imgur.com/y1vO9lY.png',
            isHD: true,
            ageRating: '18+'
        },
        {
            title: 'Superman',
            year: 2025,
            runtime: '0 min',
            poster: 'https://i.imgur.com/5J3jyWT.png',
            isHD: true,
            ageRating: null
        },
         {
            title: 'The Bad Guys 2',
            year: 2025,
            runtime: '0 min',
            poster: 'https://i.imgur.com/2pUuP9x.png',
            isHD: false,
            ageRating: null
        },
        {
            title: 'Elio',
            year: 2025,
            runtime: '0 min',
            poster: 'https://i.imgur.com/vH3kYh4.png',
            isHD: false,
            ageRating: 'PG'
        }
    ];

    const movieGrid = document.getElementById('movie-grid');

    // Function to create and append movie cards
    function displayMovies(movieArray) {
        movieGrid.innerHTML = ''; // Clear existing movies
        movieArray.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-card-overlay"></div>
                ${movie.isHD ? '<div class="badge hd">HD</div>' : ''}
                ${movie.ageRating ? `<div class="badge rating">${movie.ageRating}</div>` : ''}
                <div class="movie-card-info">
                    <h3>${movie.title}</h3>
                    <div class="movie-card-meta">
                        <span>${movie.year}</span>
                        <span>${movie.runtime}</span>
                    </div>
                </div>
            `;
            movieGrid.appendChild(movieCard);
        });
    }

    // Initial display of all movies
    displayMovies(movies);
});
