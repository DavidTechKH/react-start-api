const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is working')
})

app.listen(3000, () => {
    console.log('App is runing!')
})




/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userID --> GET = user
/image --> PUT --> user

*/