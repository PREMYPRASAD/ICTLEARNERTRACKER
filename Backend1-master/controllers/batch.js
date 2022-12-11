const batchDATA = require("../models/batch");

// -----------------------------------------------------------Start batch
//add data (post)
exports.addbatch = async(req, res) => {

    try {
        let item = {

            batch_name: req.body.batch_name,
            batch_description: req.body.batch_description


        }
        const newdata = new batchDATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

//get all batch list (get) for data
exports.getallbatch = async(req, res) => {

    try {
        let batchslist = await batchDATA.find();

        console.log(`from get method ${batchslist}`);
        res.send(batchslist);
    } catch (error) {
        console.log(`error from get method ${error}`);

    }

};


// fetch single batch data (get)
exports.getonebatch = async(req, res) => {

    try {
        let id = req.params.id;
        const singlebatchdata = await batchDATA.findById(id);
        console.log(`from get with id method ${singlebatchdata}`);
        res.send(singlebatchdata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

// delete  batch data
exports.deletebatch = async(req, res) => {

    try {
        let id = req.params.id;
        let deletebatchdata = await batchDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deletebatchdata}`);
        res.send(deletebatchdata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

// update batch data
exports.updatebatch = async(req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend

            batch_name: req.body.batch_name,
            batch_description: req.body.batch_description
        }
        console.log("incoming data from update", item);

        let updatedata = await batchDATA.findByIdAndUpdate({ "_id": id }, { $set: item });
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

};

// end batch