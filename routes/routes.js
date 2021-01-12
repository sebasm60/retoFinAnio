const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json('Bienvenido a mi API');
})

router.get('../vista/index.html', (req, res) => {
    res.status(200).json(movies);
})

module.exports = router;