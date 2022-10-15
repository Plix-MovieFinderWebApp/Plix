const API_URL='https://www.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=229d819906342a6a79fb1641a3951859&page=1'
const IMG_PATH='https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://www.themoviedb.org/3/search/movie?&api_key=229d819906342a6a79fb1641a3951859&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)


async function getMovies(url){
    const res = await fetch(url)
    const data =await res.json()

    console.log(data.results)
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }else{
        window.location.reload()
    }

})