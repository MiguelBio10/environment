const express = require('express');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const path = require('path');
const anime = require('./route/api/anime'); 

const app = express ();

//Bodyparser Middleware
app.use(bodyParser.json());


const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
// Use Routes
app.use('/api/anime',anime);

// Serve Static assets if in Production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });
}

const port =  process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
