const express = require('express');
const mongoose =require('mongoose');
const path = require('path');


const app = express ();

//Bodyparser Middleware
app.use(express.json());


const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
// Use Routes
app.use('/api/anime',require('./route/api/anime'));
app.use('/api/users',require('./route/api/users'));

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
