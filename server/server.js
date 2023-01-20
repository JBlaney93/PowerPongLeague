// setup

const express = require('express');
const app = express();
const port = 9000;
app.use(express.json());

const cors = require('cors');
const { MongoClient } = require('mongodb');
app.use(cors());

const createRouter = require('./helpers/create_router.js');

// connect to database

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
.then(client => {
    const db = client.db('pingpong');
    const playerCollection = db.collection('players');

    const playerRouter = createRouter(playerCollection);
    app.use('/api/players', playerRouter);

})
.catch(console.error);

// listen

app.listen(port, function () {
    console.log(`Listening on port ${port}`)
})

