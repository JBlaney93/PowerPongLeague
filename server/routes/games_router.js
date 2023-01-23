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

        const newGame = {
            datetime: req.body.datetime,
            w_score: req.body.w_score,
            l_score: req.body.l_score,
            winner_id: ObjectId(req.body.winner_id),
            loser_id: ObjectId(req.body.loser_id)
        }

        collection
        .insertOne(newGame)
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        });
    });

    // update by id

    router.put('/:id', (req, res) => {

        const filter = {_id: ObjectId(req.params.id)}
        const updatedGame = req.body
        delete updatedGame._id

        collection
        .updateOne(filter, { $set: updatedGame })
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        });
    });

    // delete by id

    router.delete('/:id', (req, res) => {

        const id = ObjectId(req.params.id);
        collection
        .deleteOne({_id: id})
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        });
    });

    // return games in chronological order

    // return all games played by two specific players against each other

    // get all games for a specific player

    // get win percentage for a specific player

    return router;
}

module.exports = createGamesRouter;