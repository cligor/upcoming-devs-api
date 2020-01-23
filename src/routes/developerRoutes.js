const { Router } = require('express');
const { store } = require('../controllers/developerController');

const routes = Router();

routes.get('/developers', (req, res) => {
    // get code here
});

routes.post('/developers', store);

routes.put('/developers', (req, res) => {
    // put code here
});

routes.delete('/developers', (req, res) => {
    // delete code here
});

module.exports = routes;
