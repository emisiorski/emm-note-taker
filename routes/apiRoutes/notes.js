const router = require('express').Router();
const {v4: uuid} = require('uuid');
const fs = require('fs');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let saveNote = JSON.parse(data);
            res.json(saveNote);
        }
    });
});

router.post('/notes', (req, res) => {
    var newNote = req.body;

    var notes = JSON.parse(fs.readFileSync('./db/db.json'));
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
    });

module.exports = router;