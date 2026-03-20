const API_KEY = '6b83aa96' //deberia estar en un archivo .env


export const searchMovie = async ({search}) => {
    if(search === '') return null

    try{
        const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }))
    }catch(e) {
        throw new Error('Error searching movies')
    }
}

