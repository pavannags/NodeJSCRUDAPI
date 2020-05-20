const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express()
require('dotenv/config')

// parse requests of content-type - application/json
app.use(bodyParser.json())

//ROUTES
app.get('/', (req,res) => {
res.send('hello world')
})

require('./app/routes/note.routes.js')(app)

//How do we start listerning to the server
app.listen(3000, () => {
console.log("Server is listening on port 3000")
})


//Connect to DB

mongoose.connect(
   // 'mongodb+srv://crudapi:Pavan@123@cluster0-1xhws.mongodb.net/test?retryWrites=true&w=majority'
   process.env.DB_CONNECTION,
    { useNewUrlParser: true  ,
   useUnifiedTopology: true ,
   useFindAndModify: false
},

    () =>   
    {
            return console.log('connected to DB')
        } 
    )