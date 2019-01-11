
//api  https://yts.am/api/v2/list_movies.json
// list_movies.json es lo que ira cambiando   = url https://yts.am/api/v2/movie_suggestions.json?movie_id=10
const BASE_API = 'https://yts.am/api/v2/';

class Api {
  async getSuggestion(id) {
    // fecth realizar promesas para devolver algun dato de mi api
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    // datos del query
    const { data } = await query.json();
    console.log(data);
    return data.movies
  }
}

export default new Api();