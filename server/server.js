const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001
const cors = require('cors');


app.use(express.json());
app.use(cors());

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'csce315_903_demny',
    host: 'csce-315-db.engr.tamu.edu',
    database: 'csce315_903_11',
    password: '12345',
    port: 5432,
    ssl: {rejectUnauthorized: false}
})

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
app.get('/inventory', db.getInventoryItems)
app.get('/accounts/:id', db.getAccountById)
app.post('/register', db.createAccount)
app.put('/accounts/:id', db.updateAccount)
app.delete('/accounts/:id', db.deleteAccount)



app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const classification = req.body.role;
    const sqlInsert = "INSERT INTO account_test (username, password, role) VALUES (?,?,?)";
    db.query(sqlInsert, [username, password, classification], (err, result) => {
        console.log(result);
    });
});


// app.get('/inventory', db.getInventoryItems)
app.get('/inventory/:id', db.getInventoryItemById)
app.post('/inventory', db.createInventoryItem)
app.put('/inventory/:id', db.updateInventoryItem)
app.delete('/inventory/:id', db.deleteInventoryItem)

app.get('/menu', db.getMenuItems)
app.get('/menu/:id', db.getMenuItemById)
app.post('/menu', db.createMenuItem)
app.put('/menu/:id', db.updateMenuItem)
app.delete('/menu/:id', db.deleteMenuItem)

app.get('/openOrders', db.getOpenOrders)
app.get('/openOrders/:id', db.getOpenOrdersById)
app.post('/openOrders', db.createOpenOrder)
app.put('/openOrders/:id', db.updateOpenOrders)
app.delete('/openOrders/:id', db.deleteOpenOrder)

app.get('/salesHistory', db.getSalesHistory)
app.get('/salesHistory/:id', db.getSalesHistoryById)
app.post('/salesHistory', db.createSalesHistory)
app.put('/salesHistory/:id', db.updateSalesHistory)
app.delete('/salesHistory/:id', db.deleteSalesHistory)

app.get('/staff', db.getStaff)
app.get('/staff/:id', db.getStaffById)
app.post('/staff', db.createStaff)
app.put('/staff/:id', db.updateStaff)
app.delete('/staff/:id', db.deleteStaff)

app.listen(port, () => {
    console.log('App running on port ${port}.')
})