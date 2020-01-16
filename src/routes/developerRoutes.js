const { Router } = require('express');

const routes = Router();

routes.get('/developers', (req, res) => {
    // get code here
});

routes.post('/developers', (req, res) => {
    // post code here
});

routes.put('/developers', (req, res) => {
    // put code here
});

routes.delete('/developers', (req, res) => {
    // delete code here
});

module.exports = routes;
