const baseURL = "http://localhost:9000/api/players/"

const PlayerService = {

    getPlayers () {
        return fetch(baseURL)
        .then(result => result.json())
    },

    findPlayer (id) {
        return fetch(baseURL + id)
        .then(result => result.json())
    },

    addPlayer (player) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then(res => res.json());
    }
    
}

export default PlayerService;