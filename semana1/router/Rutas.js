const express = require('express');
const router = express.Router();


router.get('/principal', (req, res) => {
    res.render('principal')
})

router.get('/experiencia', (req, res) => {
    res.render('experiencia')       
})

router.get('/estudios', (req, res) => {
    res.render('estudios')        
})

module.exports=router;