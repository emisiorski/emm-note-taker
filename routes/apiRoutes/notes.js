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
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let savedNotes = JSON.parse(data);
                savedNotes.push(newNote);
                fs.writeFile(
                    './db/db.json',
                    JSON.stringify(savedNotes, null, 4)
                );
            }
        });
        res.json();
    } else {
        res.json('Error');
    }
});

module.exports = router;