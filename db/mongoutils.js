const mongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const URL = "mongodb+srv://Apeksha96:Gpm12345@programcluster.2uof9.mongodb.net/CodingChallenge";


function mongooseconnect() {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(response => {
        console.log("mongoose connected")
    }).catch(err => console.log(err));
}

function connect() {
    mongoClient.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, db) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log("mongo connected...");
    });
}

connect();
mongooseconnect();

module.exports = { connect, mongooseconnect };