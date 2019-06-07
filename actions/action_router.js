const router = require('express').Router();

const Action = require('./action_model')

router.post('/', (req, res) => {
    Action.addAction(req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

module.exports = router;