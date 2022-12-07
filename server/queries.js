const Pool = require('pg').Pool
const pool = new Pool({
    user: 'csce315_903_matamoros',
    host: 'csce-315-db.engr.tamu.edu',
    database: 'csce315_903_11',
    password: 'Mabjmdkt#21',
    port: 5432,
    ssl: {rejectUnauthorized: false}
})

// GET
const getAccounts = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM accounts ORDER BY id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getMenuItems = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM menu ORDER BY menu_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getInventoryItems = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM inventory ORDER BY inventory_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getOpenOrders = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM open_orders ORDER BY order_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getSalesHistory = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM sales_history ORDER BY order_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStaff = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM staff ORDER BY staff_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// GET BY ID
const getAccountById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM accounts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getMenuItemById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM menu WHERE menu_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getInventoryItemById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM inventory WHERE inventory_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getOpenOrdersById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM open_orders WHERE order_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getSalesHistoryById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM sales_history WHERE order_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStaffById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM staff WHERE staff_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// POST
const createAccount = (request, response) => {
    //const { id, username, password, classification } = request.body
    const username = request.body.username;
    const password = request.body.password;
    const classification = request.body.classification;
    const id = 65;

    pool.query('INSERT INTO accounts (id, username, password, classification) VALUES ($1, $2, $3, $4) RETURNING *', [id, username, password, classification], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

const createInventoryItem = (request, response) => {
    const { inventory_id, inventory_item, inventory_amount, minimum_requirement } = request.body

    pool.query('INSERT INTO inventory (inventory_id, inventory_item, inventory_amount, minimum_requirement) VALUES ($1, $2, $3, $4) RETURNING *', [inventory_id, inventory_item, inventory_amount, minimum_requirement], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

const createMenuItem = (request, response) => {
    const { menu_id, inventory_id, menu_item, item_size, item_price, customizations } = request.body

    pool.query('INSERT INTO menu (menu_id, inventory_id, menu_item, item_size, item_price, customizations) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [menu_id, inventory_id, menu_item, item_size, item_price, customizations], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

const createOpenOrder = (request, response) => {
    const { order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date } = request.body

    pool.query('INSERT INTO open_orders (order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

const createSalesHistory = (request, response) => {
    const { order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date } = request.body

    pool.query('INSERT INTO sales_history (order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

const createStaff = (request, response) => {
    const { staff_id, staff_name, staff_position } = request.body

    pool.query('INSERT INTO staff (staff_id, staff_name, staff_position) VALUES ($1, $2, $3) RETURNING *', [staff_id, staff_name, staff_position], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

// PUT
const updateAccount = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, password, classification } = request.body

    pool.query (
        'UPDATE accounts SET username = $1, password = $2, classification = $3 WHERE id = $4',
        [username, password, classification, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send('Account modified with ID: ${id}')
        }
    )
}

const updateInventoryItem = (request, response) => {
    const inventory_id = parseInt(request.params.id)
    const { inventory_item, inventory_amount, minimum_requirement } = request.body

    pool.query (
        'UPDATE inventory SET inventory_item = $1, inventory_amount = $2, minimum_requirement = $3 WHERE inventory_id = $4',
        [inventory_item, inventory_amount, minimum_requirement, inventory_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send('Inventory modified with ID: ${id}')
        }
    )
}

const updateMenuItem = (request, response) => {
    const menu_id = parseInt(request.params.id)
    const { inventory_id, menu_item, item_size, item_price, customizations } = request.body

    pool.query (
        'UPDATE menu SET inventory_id = $1, menu_item = $2, item_size = $3, item_price = $4, customizations = $5 WHERE menu_id = $6',
        [inventory_id, menu_item, item_size, item_price, customizations, menu_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send('Menu modified with ID: ${id}')
        }
    )
}

const updateOpenOrders = (request, response) => {
    const order_id = parseInt(request.params.id)
    const { inventory_id, menu_item, item_size, customizations, item_price, purchase_date } = request.body

    pool.query (
        'UPDATE open_orders SET inventory_id = $1, menu_item = $2, item_size = $3, customizations = $4, item_price = $5, purchase_date = $6 WHERE order_id = $7',
        [inventory_id, menu_item, item_size, customizations, item_price, purchase_date, order_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send('Open Orders modified with ID: ${id}')
        }
    )
}

const updateSalesHistory = (request, response) => {
    const order_id = parseInt(request.params.id)
    const { inventory_id, menu_item, item_size, customizations, item_price, purchase_date } = request.body

    pool.query (
        'UPDATE sales_history SET inventory_id = $1, menu_item = $2, item_size = $3, customizations = $4, item_price = $5, purchase_date = $6 WHERE order_id = $7',
        [inventory_id, menu_item, item_size, customizations, item_price, purchase_date, order_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send('Sales history modified with ID: ${id}')
        }
    )
}

const updateStaff = (request, response) => {
    const staff_id = parseInt(request.params.id)
    const { staff_name, staff_position } = request.body

    pool.query (
        'UPDATE staff SET staff_name = $1, staff_position = $2 WHERE staff_id = $3',
        [staff_name, staff_position, staff_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send('Staff modified with ID: ${id}')
        }
    )
}

// DELETE
const deleteAccount = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM accounts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Account deleted with ID: ${id}')
    })
}

const deleteInventoryItem = (request, response) => {
    const inventory_id = parseInt(request.params.id)

    pool.query('DELETE FROM inventory WHERE inventory_id = $1', [inventory_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Inventory item deleted with ID: ${id}')
    })
}

const deleteMenuItem = (request, response) => {
    const menu_id = parseInt(request.params.id)

    pool.query('DELETE FROM menu WHERE menu_id = $1', [menu_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Menu item deleted with ID: ${id}')
    })
}

const deleteOpenOrder = (request, response) => {
    const order_id = parseInt(request.params.id)

    pool.query('DELETE FROM open_orders WHERE order_id = $1', [order_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Open Order deleted with ID: ${id}')
    })
}

const deleteSalesHistory = (request, response) => {
    const order_id = parseInt(request.params.id)

    pool.query('DELETE FROM sales_history WHERE order_id = $1', [order_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Sale history deleted with ID: ${id}')
    })
}

const deleteStaff = (request, response) => {
    const staff_id = parseInt(request.params.id)

    pool.query('DELETE FROM staff WHERE staff_id = $1', [staff_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Staff member deleted with ID: ${id}')
    })
}

module.exports = {
    getAccounts,
    getAccountById,
    createAccount,
    updateAccount,
    deleteAccount,

    getInventoryItems,
    getInventoryItemById,
    createInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,

    getMenuItems,
    getMenuItemById,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,

    getOpenOrders,
    getOpenOrdersById,
    createOpenOrder,
    updateOpenOrders,
    deleteOpenOrder,

    getSalesHistory,
    getSalesHistoryById,
    createSalesHistory,
    updateSalesHistory,
    deleteSalesHistory,

    getStaff,
    getStaffById,
    createStaff,
    updateStaff,
    deleteStaff,
}