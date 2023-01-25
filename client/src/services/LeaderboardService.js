const baseURL = "http://localhost:9000/api/leaderboard/"

const LeaderboardService = {

    getLeaderboard () {
        return fetch(baseURL)
        .then(result => result.json());
    }
}

export default LeaderboardService;