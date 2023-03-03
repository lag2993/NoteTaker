const path = require('path');
const express = require('express');
const router = express.Router();
const takeNotes = require('../../db/takeNotes');


router.get('/notes',(req,res)=>{
    takeNotes.getNote().then((compNote)=>{
        return res.json(compNote);
    })
});

router.post('/notes',(req,res)=>{
   takeNotes.pushNote(req.body).then((note)=>res.json(note))
});

module.exports = router;