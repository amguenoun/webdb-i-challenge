const router = require('express').Router();

const db = require('./accountController');

router.get('/', (req, res) => {
    db.get()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'db error' }));
});

router.get('/:id', (req, res) => {
    db.getById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'db error' }));
});

router.post('/', (req, res) => {
    db.insert(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).json({ message: 'db error' }));
});

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'db error' }));
});

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(data => res.status(200).json({ message: "delete successful" }))
        .catch(err => res.status(500).json({ message: 'db error' }));
});

module.exports = router;