const { log } = require('console');
const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(
        process.env.DB_CONNECT
    )
    .then(()=> {
            console.log('COnnected To DB');
        }
    )
    .catch(err => console.log(err));
}

module.exports=connectToDb;