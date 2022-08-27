const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const database = {
    users: [
        {
            id: '123',
            name: 'Dv',
            email: 'dv@gmail.com',
            password: 'Theone',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Andreu',
            email: 'andrei@gmail.com',
            password: 'john',
            entries: 0,
            joined: new Date()
        },
    ]
}

app.get('/', (req, res) => {
    console.log('Work')
})

app.post('/signin', (req, res) => {
    if (req.users.email === database.users[0].email &&
        req.users.password === database.users[0].password) {
            res.json('success')
        } else {
            res.status(400).json('Error Logging in')
        }
    res.json('Signin Success')
})

app.listen(3000, () => {
    console.log('App is runing!')
})

app.post('/register', (req, res) => {
    const {email, name, password} = req.body;
    database.users,push({
        id: '123',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
})




/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userID --> GET = user
/image --> PUT --> user

*/