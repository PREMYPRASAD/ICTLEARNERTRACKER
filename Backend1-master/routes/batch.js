const express = require('express');
const router = express.Router();

const batchcntrlr = require('../controllers/batch')

//add batch 
router.post('/add_batch', batchcntrlr.addbatch)
    //read all batch

router.get('/batchlist', batchcntrlr.getallbatch)

// read single batch detail
router.get('/getsinglebatch/:id', batchcntrlr.getonebatch)

/
// update batch detail
router.put('/updatebatch', batchcntrlr.updatebatch)

// delete batch detail
router.delete('/deletebatch/:id', batchcntrlr.deletebatch)



module.exports = router;