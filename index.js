const express = require("express");
const bodyparser = require("body-parser");
const mongoutil = require("./db/mongoutils");
const { usermodel } = require("./model/book.model");
const { response } = require("express");
const app = express();

app.use(bodyparser.json());

mongoutil.mongooseconnect();

const dummyData=[
    {id:1 ,label:"pot the plane" ,status:true},
    {id:2 ,label:"buy the jeans" ,status:false}

]


//app.use(bodyparser.urlencoded({ extended: true }));


app.get("/books", (req, res) => {
    usermodel.find().then(docs => res.send(docs))
})



app.post("/books", (req, res) => {
    if (req.body) {
        console.log(req.body);
        const useritem = new usermodel(req.body);
        useritem.save()
            .then(response => {
                return res.send(response);
            }).catch(err => res.send(err.message));
    }
})


app.get("/books/:isbn", (req, res) => {
    if (req.params) {
        const isbn = req.params.isbn;
        usermodel.find({ isbn: isbn }).then(response => {
            return res.send(response);
        }).catch(err => console.log(err));
    }
})

app.patch("/books/:isbn", (req, res) => {
    if (req.params) {
        const isbn = req.params.isbn;
        usermodel.updateOne({ isbn: isbn }, update = { bookName: "pqr" })
            .then(response => {
                return res.send(response);
            })
            .catch(err => console.log(err))
    }

})


app.delete("/books/:isbn", (req, res) => {
    if (req.params) {
        const isbn = req.params.isbn;
        usermodel.remove({ isbn: isbn })
            .then(response => {
                return res.send(response);
            })
            .catch(err => console.log(err))
    }

})


app.listen(9111, () => {
    console.log("server start at port num 9111");
})