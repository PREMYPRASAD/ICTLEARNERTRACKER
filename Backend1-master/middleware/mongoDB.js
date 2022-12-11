const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devfsd22:group5fsd@m001.gbtnfk3.mongodb.net/mainpproject?retryWrites=true&w=majority')
    .then(() => { console.log('MongoDB connected successfully'); })
    .catch(error => { console.log('MongoDB error - ' + error); })