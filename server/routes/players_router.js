const express = require('express');
const { ObjectId } = require('mongodb');

const createPlayersRouter = (collection) => {

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

    // add new player

    // delete by id (complicated—how do we handle instances of games that contain that player)

    // update player (id needs to stay the same to not disrupt the attachment of the player to the games)

    return router;
}

module.exports = createPlayersRouter;