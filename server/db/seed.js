const { MongoClient } = require('mongodb');
const { playersData, gamesData } = require('./data');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function run () {
    try {
        // connect to pingpong database
        await client.connect();
        const db = client.db('pingpong');

        // drop the database

        await db.dropDatabase();

        // make players collection

        const players = db.collection('players')
        
        // insert players and get back the collection
        await players.insertMany(playersData);
        const insertedPlayers = await players.find().toArray();

        // make games collection

        const games = db.collection('games');

        // assigning playerIDs to winners and losers in games

        const gamesWithPlayerIDs = gamesData.map(game => {
            const selectedWinner = insertedPlayers.filter(player => {
                return player.name === game.winner_name;
            });
            const selectedLoser = insertedPlayers.filter(player => {
                return player.name === game.loser_name;
            });

            // set winner and loser ids to ids of selected winners

            game.winner_id = selectedWinner[0]._id;
            game.loser_id = selectedLoser[0]._id;

            delete game.winner_name;
            delete game.loser_name;

            return game;
        });

        await games.insertMany(gamesWithPlayerIDs);

        // display inserted games
        const insertedGames = await games.find().toArray();
        console.log(insertedGames);
        console.log(insertedPlayers);

    } finally {
        await client.close();
    }
}

run().catch(console.dir);