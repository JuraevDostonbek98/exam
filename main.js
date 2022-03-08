

// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'

let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

const top_rated = document.querySelector('#btns')
const popular  = document.querySelector ('#btn')
const upcoming = document.querySelector ('#btn')


let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`
let tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
let tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`

async function topFilms() {
	let response = await fetch(tokenTop)
	response = await response.json()
    console.log(response.results);


    function renderTopFilms(){
        for(let film of topFilms){
            let img = document.createElement('img')
            let div = document.createElement('div')
            let span1 = document.createElement('span')
            let span2 = document.createElement('span')
            let h3 = document.createElement ('h3')
            let divMovie = document.createElement('div')

            divMovie.className = 'div'
            img.className = 'img src="https://image.tmdb.org/t/p/w500/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg"'
            h3.className = 'h3'
            
            divMovie.append(img,h3)
            

        
    
            console.log(film);
        }
    }
    renderTopFilms()
}topFilms()



