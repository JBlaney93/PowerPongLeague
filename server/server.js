// setup

const express = require('express');
const app = express();
const port = 9000;
app.use(express.json());

const cors = require('cors');
const { MongoClient } = require('mongodb');
app.use(cors());

const createPlayersRouter = require('./routes/players_router.js');
const createGamesRouter = require('./routes/games_router.js');
const CreateLeaderboardRouter = require('./routes/leaderboard_router')

// connect to database

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
.then(client => {

    // locate collections in database

    const db = client.db('pingpong');
    const playersCollection = db.collection('players');
    const gamesCollection = db.collection('games');


    // hook up routers

    const playersRouter = createPlayersRouter(playersCollection);
    const gamesRouter = createGamesRouter(gamesCollection);
    const leaderboardRouter = CreateLeaderboardRouter(playersCollection, gamesCollection);

    app.use('/api/players', playersRouter);
    app.use('/api/games', gamesRouter);
    app.use('/api/leaderboard', leaderboardRouter);
    
})
.catch(console.error);

// listen

app.listen(port, function () {
    console.log(`Listening on port ${port}`)
})

