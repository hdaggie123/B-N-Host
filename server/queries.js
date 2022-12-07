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

/**
 * gets accounts
 * @param  request 
 * @param  response 
 */
const getAccounts = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM accounts ORDER BY id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * gets menu items
 * @param  request 
 * @param  response 
 */
const getMenuItems = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM menu ORDER BY menu_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


/**
 * get Iveentory items
 * @param  request 
 * @param  response 
 */
const getInventoryItems = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM inventory ORDER BY inventory_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * get Open Orders
 * @param  request 
 * @param  response 
 */
const getOpenOrders = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM open_orders ORDER BY order_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * get Sales History
 * @param  request 
 * @param  response 
 */
const getSalesHistory = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM sales_history ORDER BY order_id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * get Staff
 * @param  request 
 * @param  response 
 */
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
/**
 * get accounts by id
 * @param  request 
 * @param  response 
 */
const getAccountById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM accounts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * get menu items by id
 * @param  request 
 * @param  response 
 */
const getMenuItemById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM menu WHERE menu_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * get inventory items by id
 * @param  request 
 * @param  response 
 */
const getInventoryItemById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM inventory WHERE inventory_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * get open orders by id
 * @param  request 
 * @param  response 
 */
const getOpenOrdersById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM open_orders WHERE order_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/**
 * get sales history by id
 * @param  request 
 * @param  response 
 */
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

/**
 * create account
 * @param  request 
 * @param  response 
 */
const createAccount = (request, response) => {
    const {username, password, classification } = request.body
    const id = NULL

    pool.query('INSERT INTO accounts (id, username, password, classification) VALUES ($1, $2, $3, $4) RETURNING *', [id, username, password, classification], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

/**
 * create inventory item
 * @param  request 
 * @param  response 
 */
const createInventoryItem = (request, response) => {
    const { inventory_id, inventory_item, inventory_amount, minimum_requirement } = request.body

    pool.query('INSERT INTO inventory (inventory_id, inventory_item, inventory_amount, minimum_requirement) VALUES ($1, $2, $3, $4) RETURNING *', [inventory_id, inventory_item, inventory_amount, minimum_requirement], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}


/**
 * create menu item
 * @param  request 
 * @param  response 
 */
const createMenuItem = (request, response) => {
    const { menu_id, inventory_id, menu_item, item_size, item_price, customizations } = request.body

    pool.query('INSERT INTO menu (menu_id, inventory_id, menu_item, item_size, item_price, customizations) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [menu_id, inventory_id, menu_item, item_size, item_price, customizations], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}


/**
 * create open order
 * @param  request 
 * @param  response 
 */
const createOpenOrder = (request, response) => {
    const { order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date } = request.body

    pool.query('INSERT INTO open_orders (order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

/**
 * create sales history
 * @param  request 
 * @param  response 
 */
const createSalesHistory = (request, response) => {
    const { order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date } = request.body

    pool.query('INSERT INTO sales_history (order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [order_id, inventory_id, menu_item, item_size, customizations, item_price, purchase_date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Account added with ID: ${results.rows[0].id}')
    })
}

/**
 * create staff
 * @param  request 
 * @param  response 
 */
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

/**
 * update account
 * @param  request 
 * @param  response 
 */
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

/**
 * update inventory item
 * @param  request 
 * @param  response 
 */
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


/**
 * update menu item
 * @param  request 
 * @param  response 
 */
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


/**
 * update open orders
 * @param  request 
 * @param  response 
 */
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

/**
 * update sales history
 * @param  request 
 * @param  response 
 */
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

/**
 * update staff
 * @param  request 
 * @param  response 
 */
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
/**
 * delete account
 * @param  request 
 * @param  response 
 */
const deleteAccount = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM accounts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Account deleted with ID: ${id}')
    })
}

/**
 * delete inventory item
 * @param  request 
 * @param  response 
 */
const deleteInventoryItem = (request, response) => {
    const inventory_id = parseInt(request.params.id)

    pool.query('DELETE FROM inventory WHERE inventory_id = $1', [inventory_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Inventory item deleted with ID: ${id}')
    })
}

/**
 * delete menu item
 * @param  request 
 * @param  response 
 */
const deleteMenuItem = (request, response) => {
    const menu_id = parseInt(request.params.id)

    pool.query('DELETE FROM menu WHERE menu_id = $1', [menu_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Menu item deleted with ID: ${id}')
    })
}


/**
 * delete open orders
 * @param  request 
 * @param  response 
 */
const deleteOpenOrder = (request, response) => {
    const order_id = parseInt(request.params.id)

    pool.query('DELETE FROM open_orders WHERE order_id = $1', [order_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Open Order deleted with ID: ${id}')
    })
}

/**
 * delete sales history
 * @param  request 
 * @param  response 
 */
const deleteSalesHistory = (request, response) => {
    const order_id = parseInt(request.params.id)

    pool.query('DELETE FROM sales_history WHERE order_id = $1', [order_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Sale history deleted with ID: ${id}')
    })
}


/**
 * delete staff
 * @param  request 
 * @param  response 
 */
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