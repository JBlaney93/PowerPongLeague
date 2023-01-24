const express = require('express');
const { ObjectId } = require('mongodb');
const PlayerStats = require('../db/player_stats')

const CreateLeaderboardRouter = (playersCollection, gamesCollection) => {

    const router = express.Router();


    router.get('/', async function getLeaderboard(req, res) {
        
            const players = await playersCollection.find().toArray();
            const games = await gamesCollection.find().toArray();

            const result = PlayerStats({players, games})

            res.json(result);
    })
    
    return router;
}

module.exports = CreateLeaderboardRouter;