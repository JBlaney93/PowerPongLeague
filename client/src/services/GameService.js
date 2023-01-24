const baseURL = "http://localhost:9000/api/games/"

const GameService = {

    getGames () {
        return fetch(baseURL)
        .then(result => result.json());
    },

    findGame (id) {
        return fetch(baseURL + id)
        .then(result => result.json());
    },

    addGame (game) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json());
    },

    byWinner (player_id) {
        return fetch(baseURL + "bywinner/" + player_id)
    },

    byLoser (player_id) {
        return fetch(baseURL + "byloser/" + player_id)
    }
 
}

export default GameService;