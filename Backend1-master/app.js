const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');


require('./middleware/mongoDB') // initiate mongodb connection

const app = new express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//static folder  
app.use(express.static(path.resolve(__dirname, './uploads')));
const PORT = process.env.PORT || 3000;

//all api 
const userApi = require('./routes/user');
app.use('/api', userApi);
const studentApi = require('./routes/student');
app.use('/api', studentApi);
const batchApi = require('./routes/batch');
app.use('/api', batchApi);
const courseApi = require('./routes/courses');
app.use('/api', courseApi);
const programApi = require('./routes/program');
app.use('/api', programApi);


//server code
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})