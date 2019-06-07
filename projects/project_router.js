const router = require('express').Router();

const Project = require('./project_model')
const Action = require('../actions/action_model')

router.post('/', (req, res) => {
    Project.addProject(req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

router.get('/:id', async (req, res) => {
    const projects = Project.getProjectById(req.params.id)
    .then(project => {
        Action.getActions(req.params.id)
        .then(action => {
            res.status(200).json({project: project, action: action})
        })
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})


module.exports = router;