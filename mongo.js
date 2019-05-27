const mongoose = require('mongoose');

// var user = "heroku_4m3km28x"
// var pwd = 'rmrm93njviet46a4caul3svj4p'
// var url = 'ds225078.mlab.com:25078'
// var db = 'heroku_4m3km28x'

// const mongoSrtConn = 'mongodb://${user}:${pwd}@${url}/${db}';
const mongoSrtConn = 'mongodb://heroku_4m3km28x:rmrm93njviet46a4caul3svj4p@ds225078.mlab.com:25078/heroku_4m3km28x'
mongoose.connect(mongoSrtConn);

//data manipulation
const TaskSchema = new mongoose.Schema({
    title: String,
    dueDate: Date,
    done: Boolean,
    tags: Array
});

const Task = mongoose.model('tasks', TaskSchema);

module.exports = {
    deleteByName: taskName => Task.remove({title: taskName})
}