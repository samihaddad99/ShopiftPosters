/**
 * As implemented from: https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
 */

const { Pool } = require('pg')
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

const getMerchants = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
  
const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body

    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`New merchant added: ${JSON.stringify(results.rows[0])}`)
    })
  })
}
  
const deleteMerchant = (merchantId) => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(merchantId)

    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}

const updateMerchant = (id, body) => {
  console.log("id " + id + ", name " + body.name + ", email " +  body.email);
  return new Promise(function(resolve, reject) {
    let pid = parseInt(id)
    
    pool.query('UPDATE merchants SET name=$1, email=$2 WHERE id=$3',[body.name, body.email, pid], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant updated with ID: ${pid}`)
    })
  })
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
    updateMerchant,
}