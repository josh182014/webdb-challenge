const express = require('express')

const projectRouter = require('./projects/project_router')
const actionRouter = require('./actions/action_router')

const server = express();
server.use(express.json());

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

server.get('/', (req, res) => {
    res.status(200).json("Hello, World.")
})
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);