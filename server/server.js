const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
const { MongoClient } = require('mongodb');
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
    .then(client => {
        const db = client.db('pingpong');
    }
)

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`)
})

