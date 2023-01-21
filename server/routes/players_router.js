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

    router.post('/', (req, response) => { 

        // check if name already exists in collection
        // const name = req.params.name
        // collection
        // .find({name: name})

        collection
        .insertOne(req.body)
        .then(result => response.json(result))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        })
    })

    // update player (id needs to stay the same to not disrupt the attachment of the player to the games)

    router.put('/:id', (req, res) => {
        const id = ObjectId(req.params.id);
        const updatedObject = req.body;
        delete updatedObject._id;
        
        collection
        .updateOne({_id: id}, {$set: updatedObject})
        .then(result => res.json(result));

    })
    
    // delete by id (complicated—how do we handle instances of games that contain that player)


    return router;
}

module.exports = createPlayersRouter;