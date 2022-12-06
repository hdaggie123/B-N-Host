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

// POST
const createAccount = (request, response) => {
    const { id, username, password, classification } = request.body

    pool.query('INSERT INTO accounts (id, username, password, classification) VALUES ($1, $2, $3, $4) RETURNING *', [id, username, password, classification], (error, results) => {
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

module.exports = {
    getAccounts,
    getAccountById,
    getMenuItemById,
    createAccount,
    updateAccount,
    deleteAccount,
}