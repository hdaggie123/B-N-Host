// const express = require('express');
// const PORT = process.env.PORT || 3001;
// const app = express();

// app.get('/api', (req, res) => {
//     res.json({message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
// });

// app.listen(PORT, () => {console.log('Listening on port ${PORT}');});

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/accounts', db.getAccounts)
app.get('/accounts/:id', db.getAccountById)
app.get('/menu/:id', db.getMenuItemById)
app.post('/accounts', db.createAccount)
app.put('/accounts/:id', db.updateAccount)
app.delete('/accounts/:id', db.deleteAccount)

app.listen(port, () => {
    console.log('App running on port ${port}.')
})