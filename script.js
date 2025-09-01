document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    // In a real app, this would come from a server or API
    const movies = [
        { title: 'Jurassic World Rebo...', year: 2025, runtime: '0 min', poster: 'https://i.imgur.com/u5I6rqP.png', isHD: true, ageRating: null },
        { title: 'Gold Rush Game', year: 2025, runtime: '120 min', poster: 'https://i.imgur.com/83pA89m.png', isHD: true, ageRating: '16+' },
        { title: 'Mission: Impossible Fi...', year: 2025, runtime: '0 min', poster: 'https://i.imgur.com/QpBiqgT.png', isHD: true, ageRating: 'PG' },
        { title: 'Fall for Me', year: 2025, runtime: '103 min', poster: 'https://i.imgur.com/rNNO2gL.png', isHD: true, ageRating: '13+' },
        { title: 'How to Train Your Dragon 2', year: 2025, runtime: '129 min', poster: 'https://i.imgur.com/e5pIARs.png', isHD: true, ageRating: null },
        { title: 'MAXXX', year: 2025, runtime: '133 min', poster: 'https://i.imgur.com/39wH8b2.png', isHD: true, ageRating: '18+' },
        { title: 'Krew Demonic Runners', year: 2025, runtime: '0 min', poster: 'https://i.imgur.com/w464g1G.png', isHD: false, ageRating: '18+' },
        { title: 'F1: The Movie', year: 2025, runtime: '156 min', poster: 'https://i.imgur.com/jE61wKa.png', isHD: true, ageRating: null },
        { title: 'I Know What You Did L...', year: 2025, runtime: '111 min', poster: 'https://i.imgur.com/0uQ5Y9r.png', isHD: true, ageRating: '18+' },
        { title: 'Together', year: 2025, runtime: '102 min', poster: 'https://i.imgur.com/M5o2h7W.png', isHD: false, ageRating: '18+' },
    ];

    const tvSeries = [
        { title: 'The Witcher', year: 2019, runtime: '3 Seasons', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/rPpxrp2z9FztmC23B0f7iW2R2s2.jpg', isHD: true, ageRating: '18+' },
        { title: 'Stranger Things', year: 2016, runtime: '4 Seasons', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', isHD: true, ageRating: '16+' },
        { title: 'Loki', year: 2021, runtime: '2 Seasons', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/voHUmluYmKyleFkTu3lOXQG702u.jpg', isHD: true, ageRating: '13+' },
        { title: 'The Mandalorian', year: 2019, runtime: '3 Seasons', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/pVLGEbOO2P8dptp2T3D3j9amO44.jpg', isHD: true, ageRating: 'PG' },
        { title: 'Arcane', year: 2021, runtime: '1 Season', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg', isHD: true, ageRating: '16+' },
        { title: 'Game of Thrones', year: 2011, runtime: '8 Seasons', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg', isHD: true, ageRating: '18+' },
        { title: 'Breaking Bad', year: 2008, runtime: '5 Seasons', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg', isHD: false, ageRating: '18+' },
        { title: 'The Boys', year: 2019, runtime: '4 Seasons', poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face/2zmTngn1tJ9p5PaNyugNQjplT4E.jpg', isHD: true, ageRating: '18+' },
    ];


    // --- DOM Elements ---
    const contentGrid = document.getElementById('content-grid');
    const moviesBtn = document.getElementById('movies-btn');
    const tvSeriesBtn = document.getElementById('tv-series-btn');
    const listTitle = document.getElementById('list-title');


    // --- Functions ---

    // Function to display content (movies or TV series)
    function displayContent(contentArray) {
        contentGrid.innerHTML = ''; // Clear existing content
        contentArray.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('movie-card');

            itemCard.innerHTML = `
                <img src="${item.poster}" alt="${item.title}">
                <div class="movie-card-overlay"></div>
                ${item.isHD ? '<div class="badge hd">HD</div>' : ''}
                ${item.ageRating ? `<div class="badge rating">${item.ageRating}</div>` : ''}
                <div class="movie-card-info">
                    <h3>${item.title}</h3>
                    <div class="movie-card-meta">
                        <span>${item.year}</span>
                        <span>${item.runtime}</span>
                    </div>
                </div>
            `;
            contentGrid.appendChild(itemCard);
        });
    }


    // --- Event Listeners ---

    // Event listener for the "Movies" button
    moviesBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page reload
        listTitle.textContent = 'Latest Movies';
        displayContent(movies);
        // Update active state
        tvSeriesBtn.classList.remove('active');
        moviesBtn.classList.add('active');
    });

    // Event listener for the "TV Series" button
    tvSeriesBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page reload
        listTitle.textContent = 'Latest TV Series';
        displayContent(tvSeries);
        // Update active state
        moviesBtn.classList.remove('active');
        tvSeriesBtn.classList.add('active');
    });


    // --- Initial Load ---
    // Display movies by default when the page first loads
    displayContent(movies);
});
