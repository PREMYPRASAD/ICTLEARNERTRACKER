const express = require('express');
const router = express.Router();

const programcntrlr = require('../controllers/program')

//add program 

router.post('/add_program', programcntrlr.addprogram)
    //read all program

router.get('/programlist', programcntrlr.getallprogram)

// read single program detail
router.get('/getsingleprogram/:id', programcntrlr.getoneprogram)

/
// update  program detail
router.put('/updateprogram', programcntrlr.updateprogram)

// delete program detail
router.delete('/deleteprogram/:id', programcntrlr.deleteprogram)



module.exports = router;