const baseURL = "http://localhost:9000/api/games"

const GameService = {

    getGames () {
        return fetch(baseURL)
        .then(result => result.json())
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
    }
    
}

export default GameService;