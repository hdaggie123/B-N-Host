const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001
const cors = require('cors')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(cors())
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
app.post('/accounts', db.createAccount)
app.put('/accounts/:id', db.updateAccount)
app.delete('/accounts/:id', db.deleteAccount)

app.get('/login/:username/:password', db.getLogin);

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