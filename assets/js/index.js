

const trendingMovies = document.getElementById("trendingMovies");


const insertMainSliderItems = (arr) => {
    trendingMovies.innerHTML = arr.map(movie => {
        return `
            <div class="item">
                <figure class="mb-0 movieCard">
                    <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}" alt="">
                    <figcaption>
                        <h3 class="display-3">
                            ${movie.title || movie.original_title || movie.original_name}
                        </h3>
                        <em class="my-5">
                            ${movie.overview}
                        </em>
                        <p>
                            <button data-id="${movie.id}"
                            onclick ="loadQparams(this)"
                            class="btn btn-large btn-red">View More</button>
                        </p>
                    </figcaption>
                </figure>
            </div> 
        
        
        
        `
    }).join("")
}

const loadQparams = (ele) => {
    cl(ele)
    let id = ele.getAttribute("data-id");
    // let id = ele.dataset[`id`];
    cl(id)
    let currentUrl = new URL(window.location.href);
    cl(currentUrl);
    let queryParams = new URLSearchParams(currentUrl.search);
    cl(queryParams)
    queryParams.set("movieid",id);
    cl(queryParams)
    currentUrl.search = queryParams.toString();
    cl(currentUrl);
    let movieRedirectUrl = `${currentUrl.origin}/movieInfo.html${currentUrl.search}`;
    cl(movieRedirectUrl);
    window.location.href = movieRedirectUrl;
}



const initSlider = () => {
    $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
       
        1000:{
            items:1
        }
    }
})
}



const fetchTrendingMovies = async () => {
    let res = await makeApiCall(trending_url,"GET")
        cl(res)
        insertMainSliderItems(res.results);
        initSlider();
      
}
fetchTrendingMovies()