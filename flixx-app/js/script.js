const global = {
   currentPage : window.location.pathname,

    search: {
        term: '',
        type: '',
        page: 1,
        totalPages: 1,
        totalResults: 0,
    },
    api:{
      API_KEY :'ab968b61471a1b944a3acae5c0f497f4',
     API_URL: 'https://api.themoviedb.org/3/'
    }
};

//Fetch data from TMDB AP

async function fetchAPIData(endpoint) {
    try{ 
        const API_KEY = 'ab968b61471a1b944a3acae5c0f497f4';
    const API_URL = 'https://api.themoviedb.org/3/'

    showSpinner()

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data =  await response.json();
   
        hideSpinner()
    return data;
    }catch (error) { 
        console.log('Something went wrong' + error)
    }
    
}


//Fetch Data for TMDB Search Api

async function searchAPIData() {
    try{ 
        const API_KEY = global.api.API_KEY;
    const API_URL = global.api.API_URL;

    showSpinner();

    const response = await fetch(`${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`);
    const data =  await response.json();
   
     hideSpinner();

    return data;
    }catch (error) { 
        console.log('Something went wrong' + error)
    }
    
}



function showSpinner(){
    document.querySelector('.spinner').classList.add('show')
}

function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show')
}

function highLight(){
    const navheader = document.querySelectorAll('.nav-link');
    navheader.forEach(nav => {

        if(nav.getAttribute('href') == global.currentPage) {
            nav.classList.add('active');
        }
    })

}

async function displaySlider(){
    const result = await fetchAPIData('movie/popular');
        
            const data =  result.results;
            console.log(data);

            data.forEach((movie) => {
                const mainSwiper = document.querySelector('.swiper-wrapper');

                const div = document.createElement('div');
                div.className = 'swiper-slide';

                div.innerHTML = ` 
                
                    <div class="swiper-slide">
                    <a href="movie-details.html?id=${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
                    </a>
                    <h4 class="swiper-rating">
                    <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
                    </h4>
                </div>
                
                
                `;

                mainSwiper.appendChild(div);

                initSwiper();
            })
};

function initSwiper(){
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetweem: 30,
        freeMode: true,
        loop:true,
        autoplay: {
            delay: 4000,
            disableOnInteration:false
        },
        breakpoints: {
            500:{
                slidesPerView: 2,
            },
             700:{
                slidesPerView: 3,
            },
             1200:{
                slidesPerView: 4,
            },
        }
    });
};


async function displayMovies(){
    
        const result = await fetchAPIData('movie/popular');
        
            const data =  result.results

            data.forEach(movie => {
               const cardContentDiv = document.querySelector('#popular-movies');
                console.log(movie)
                const div = document.createElement('div');
                div.className = 'card';

               div.innerHTML = ` 
               
                <a href="movie-details.html?id=${movie.id}">
                <img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                class="card-img-top"
                alt="${movie.title}"
                />
                </a>
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">
                    <small class="text-muted">Release:${movie.release_date}</small>
                    </p>
                </div>
               
               `;

               cardContentDiv.appendChild(div);
            });

};


async function displayTvShow(){
    const result = await fetchAPIData('tv/popular');

    const data = result.results;
    // console.log(data);

    data.forEach(tvShow => {
        const tvShowContainer = document.querySelector('#popular-shows');

        const div = document.createElement('div');
        div.className = 'card';

        div.innerHTML = ` 
            
         <a href="tv-details.html?id=${tvShow.id}">
            <img
              src="https://image.tmdb.org/t/p/w500${tvShow.poster_path}"
              class="card-img-top"
              alt="${tvShow.name}"
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">${tvShow.name}</h5>
            <p class="card-text">
              <small class="text-muted">Aired: ${tvShow.first_air_date}</small>
            </p>
          </div>
       
        
        
        `;
    
        tvShowContainer.appendChild(div)

    })

}

async function tvShowDetails(){
    const tvShowId = window.location.search.split('=')[1];

    const tvShow = await fetchAPIData(`tv/${tvShowId}`);

    //Background CSS
    displayBackgroundImages('tv', tvShow.backdrop_path);

    // console.log(tvShow);

    const showDetailPage = document.querySelector('#show-details');

    const div = document.createElement('div');
    div.className = 'show-content';

    div.innerHTML = ` 

    <div class="details-top">
          <div>
            <img
              src="https://image.tmdb.org/t/p/w500${tvShow.poster_path}"
              class="card-img-top"
              alt="${tvShow.name}"
            />
          </div>
          <div>
            <h2>${tvShow.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${tvShow.vote_average} / 10
            </p>
            <p class="text-muted">Release Date: ${tvShow.first_air_date}</p>
            <p>
             ${tvShow.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">

                ${ tvShow.genres.map(genre => `<li> ${genre.name} </>` ).join (' ') }
            
            </ul>
            <a href="#" target="_blank" class="btn">Visit Show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li><span class="text-secondary">Number Of Episodes:</span> ${tvShow.number_of_episodes}</li>
            <li>
              <span class="text-secondary">Last Episode To Air:</span> ${tvShow.last_episode_to_air.name}
            </li>
            <li><span class="text-secondary">Status:</span> ${tvShow.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">
          <ul>
          ${tvShow.production_companies.map(company => `<li>${company.name} - ${company.origin_country}</li>`).join(' ')}
          </ul>
          </div>
        </div>
    
    `;

    showDetailPage.appendChild(div)


}

async function movieDetail(){
    const movieId = window.location.search.split('=')[1];

    const movie = await fetchAPIData(`movie/${movieId}`);

    console.log(movie)

    //Background CSS
    displayBackgroundImages('movie', movie.backdrop_path);

    const movieDetailsSection = document.querySelector('#movie-details');

    // console.log(movie)

    const div = document.createElement('div');
    div.className = 'all-details-cover';

    div.innerHTML = ` 

         <div class="details-top">
          <div>
            <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="Movie Title"
            />
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
             ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
            ${movie.genres.map(genre => `<li>${genre.name}</li>` ).join(' ')}
            </ul>
            <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> ${movie.budget === 0 ? 'No budget estimated' :  `$${movie.budget}` }</li>
            <li><span class="text-secondary">Revenue:</span> ${movie.revenue === 0 ? 'No revenue estimated' : `$${movie.revenue}`}</li>
            <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <ul class="list-group">
            ${movie.production_companies.map(company => `<li>${company.name + ' - ' + company.origin_country} </li>`).join(' ')}
          </ul>
        </div>
    
    `;
   
    movieDetailsSection.appendChild(div);
   
}

async function search(results){
    const queryString = window.location.search;
     console.log(queryString)
    const urlParams = new URLSearchParams(queryString)
    global.search.type = urlParams.get('type');
    global.search.term = urlParams.get('search-term');

    if(global.search.term !== '' && global.search.term  !== null){
        //Make request and display result
        const { results , total_pages, page, total_results  } = await searchAPIData();

         const SearchResultContainer = document.querySelector('#search-results');
         

        SearchResultContainer.innerHTML = '';
        document.querySelector('#pagination').innerHTML = '';
        document.querySelector('#search-results-heading').innerHTML = '';


        global.search.page = page;
        global.search.totalPages = total_pages;
        global.search.totalResults = total_results;


        console.log(results);
        console.log(page, total_pages, total_results)

            if(results.length > 0 ){
                
                results.forEach(searchResult => {

                    console.log(searchResult)

                    
                    const div = document.createElement('div');
                    div.className = 'card';

                    if( global.search.type === 'movie'){

                         div.innerHTML = `

                      <a href="movie-details.html?id=${searchResult.id}">
                        <img src="https://image.tmdb.org/t/p/w500${searchResult.poster_path}" class="card-img-top" alt="" />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${searchResult.title}</h5>
                        <p class="card-text">
                        <small class="text-muted">Release: ${searchResult.release_date}</small>
                        </p>
                    </div>
                    
                    `;

                    }else{

                            div.innerHTML = `

                      <a href="tv-details.html?id=${searchResult.id}">
                        <img src="https://image.tmdb.org/t/p/w500${searchResult.poster_path}" class="card-img-top" alt="" />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${searchResult.name}</h5>
                        <p class="card-text">
                        <small class="text-muted">Release: ${searchResult.first_air_date}</small>
                        </p>
                    </div>
                    
                    `;


                    }

                    document.querySelector('#search-results-heading').innerHTML = ` 
                        <h2>${results.length} of ${global.search.totalResults} </h2>
                    `;

                    SearchResultContainer.appendChild(div)
                });

                displayPagination();

            }else{
                // alert('Result not found')
                showAlert('Result not found')
            }


    }else{
        // alert('Enter a value search terms');
        showAlert('Enter a value search terms','alert')
    }

    // console.log({ globalSearch: global.search.type, globalTerm: global.search.term})

}




//Search & Display Pagination for Search
function displayPagination(){
    const div = document.createElement('div');
    div.classList.add('pagination');

    div.innerHTML = `

     <button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
    
    `;

    document.querySelector('#pagination').appendChild(div);

    //Display prev button if on first page
    if(global.search.page === 1){
        document.querySelector('#prev').disabled = true;
    }

    //The next Button if on the plast page
      if(global.search.page === global.search.totalPages){
        document.querySelector('#next').disabled = true;
    }

    //Next Page

    document.querySelector('#next').addEventListener('click', async () => {
        global.search.page++;
        const { results, total_page } = await searchAPIData();
        search(results);
    })

     document.querySelector('#prev').addEventListener('click', async () => {
        global.search.page--;
        const { results, total_page } = await searchAPIData();
        search(results);
    })
}


function showAlert(message, className){
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', className );
    alertElement.appendChild(document.createTextNode(message));
    document.querySelector('#alert').appendChild(alertElement);

    setTimeout(() => alertElement.remove(alertElement), 3000);
}



//Display backdrop on Details Pages
function displayBackgroundImages(type, backgroundPath){
    const overlayDiv = document.createElement('div');
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundPosition = 'center';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1';
    overlayDiv.style.opacity = '0.1';

    if(type === 'movie' ){
        document.querySelector('#movie-details').appendChild(overlayDiv)
    }else{
         document.querySelector('#show-details').appendChild(overlayDiv)
    }
}


//Init App Router

function init(){
    switch(global.currentPage){
        case '/flixx-app/':
        case '/flixx-app/index.html' :
            // console.log('home');
            displaySlider();
            displayMovies();
            break;

        case '/flixx-app/shows.html':
            console.log('Show Page');
            displayTvShow()
            break;

        case '/flixx-app/movie-details.html':
            // console.log('Movie Detail Page');
            movieDetail();
            break;

        case '/flixx-app/tv-details.html':
            console.log('TV Detail Page');
            tvShowDetails();
            break;

         case '/flixx-app/search.html':
            console.log('Search Page');
            search();
            break;
    }

    highLight();
}

window.addEventListener('DOMContentLoaded', init)



// console.log(global.currentPage) 