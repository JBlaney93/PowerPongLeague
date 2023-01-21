const express = require('express');
const { ObjectId } = require('mongodb')

const createGamesRouter = (collection) => {

    const router = express.Router();

    // get all

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then(data => res.json(data))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        })
    });

    // get by id

    router.get('/:id', (req, res) => {
        const id = ObjectId(req.params.id);
        collection
        .findOne({_id: id})
        .then(data => res.json(data))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        });
    });

    // save game

    router.post('/', (req, res) => {
        collection
        .insertOne(req.body)
        .then(result => res.json(result))
        .catch(err => {
            
        })
    })

    // delete by id

    // return games in chronological order

    // return all games played by two specific players against each other

    // get all games for a specific player

    // get win percentage for a specific player

    return router;
}

module.exports = createGamesRouter;