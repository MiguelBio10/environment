const express = require ('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// anime model
const animes = require('../../models/animes');

//@route Get api/animes
//@desc Get All animes
//@access Private
router.get('/', (req, res) => {

    animes.find()
    .sort({date: -1 })
    .then(anime => res.json(anime))

});
//@route Post api/animes
//@desc Post All animes
//@access Private
router.post('/', auth, (req, res) => {
    const newanimes = new animes ({
        name: req.body.name
    });
    newanimes.save().then(Animes => res.json(Animes));
});

router.delete('/:id', auth, (req, res) => {
    animes.findById(req.params.id)
        .then(Anime => {
            if (!Anime) {
                return res.status(404).json({ success: false, message: 'Anime not found' });
            }
            Anime.deleteOne()
                .then(() => res.json({ success: true }))
                .catch(err => res.status(500).json({ success: false, error: err.message }));
        })
        .catch(err => res.status(500).json({ success: false, error: err.message }));
});

module.exports = router;
