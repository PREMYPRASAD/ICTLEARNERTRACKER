const express = require('express');
const router = express.Router();

const coursecntrlr = require('../controllers/courses')

//add course 
router.post('/add_course', coursecntrlr.addcourse)
    //read all course

router.get('/courselist', coursecntrlr.getallcourses)

// read single couse detail
router.get('/getsinglecourse/:id', coursecntrlr.getonecourse)

/
// update  course detail
router.put('/updatecourse', coursecntrlr.updatecourse)

// delete course detail
router.delete('/deletecourse/:id', coursecntrlr.deletecourse)



module.exports = router;