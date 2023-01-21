const baseURL = "http://localhost:9000/api/players"

const PlayerService = {

    getPlayers () {
        return fetch(baseURL)
        .then(result => result.json())
    },

    addBooking (booking) {

    }
    
}

export default PlayerService;