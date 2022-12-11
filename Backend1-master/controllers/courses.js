const courseDATA = require("../models/courses");

// -----------------------------------------------------------Start Course
//add data (post)
exports.addcourse = async(req, res) => {

    try {
        let item = {

            course_name: req.body.course_name,
            course_description: req.body.course_description


        }
        const newdata = new courseDATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

//get all Course list (get) for data
exports.getallcourses = async(req, res) => {

    try {
        let courseslist = await courseDATA.find();

        console.log(`from get method ${courseslist}`);
        res.send(courseslist);
    } catch (error) {
        console.log(`error from get method ${error}`);

    }

};


// fetch single Course data (get)
exports.getonecourse = async(req, res) => {

    try {
        let id = req.params.id;
        const singlecoursedata = await courseDATA.findById(id);
        console.log(`from get with id method ${singlecoursedata}`);
        res.send(singlecoursedata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};
// delete  Course data
exports.deletecourse = async(req, res) => {

    try {
        let id = req.params.id;
        let deletecoursedata = await courseDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deletecoursedata}`);
        res.send(deletecoursedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};
// update Course data
exports.updatecourse = async(req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend

            course_name: req.body.course_name,
            course_description: req.body.course_description
        }
        console.log("incoming data from update", item);

        let updatedata = await courseDATA.findByIdAndUpdate({ "_id": id }, { $set: item });
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

//end course