const programDATA = require("../models/program");

// -----------------------------------------------------------Start program
//add data (post)
exports.addprogram = async(req, res) => {

    try {
        let item = {

            program_name: req.body.program_name,
            program_description: req.body.program_description


        }
        const newdata = new programDATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

//get all program list (get) for data
exports.getallprogram = async(req, res) => {

    try {
        let programslist = await programDATA.find();

        console.log(`from get method ${programslist}`);
        res.send(programslist);
    } catch (error) {
        console.log(`error from get method ${error}`);

    }

};

// fetch single program data (get)
exports.getoneprogram = async(req, res) => {

    try {
        let id = req.params.id;
        const singleprogramdata = await programDATA.findById(id);
        console.log(`from get with id method ${singleprogramdata}`);
        res.send(singleprogramdata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

// delete  program data
exports.deleteprogram = async(req, res) => {

    try {
        let id = req.params.id;
        let deleteprogramdata = await programDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deleteprogramdata}`);
        res.send(deleteprogramdata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

// update program data
exports.updateprogram = async(req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend

            program_name: req.body.program_name,
            program_description: req.body.program_description
        }
        console.log("incoming data from update", item);

        let updatedata = await programDATA.findByIdAndUpdate({ "_id": id }, { $set: item });
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

// end program