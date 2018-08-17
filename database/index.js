const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri = 'mongodb://localhost:27017/roguepod-backend'

mongoose.connect(uri, { useNewUrlParser: true }).then(
    () => {
        console.log('Connected to Mongo');

    },
    err => {
         console.log('error connecting to Mongo: ')
         console.log(err);

        }
  );


module.exports = mongoose.connection
