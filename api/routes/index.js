/**
 * As implemented from: https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
 */

const express = require('express');
var router = express.Router();
const app = express()
const port = 3001
const merchant_model = require('../merchant_model') // import the merchant functions

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  merchant_model.getMerchants()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/favicon.ico', (req,res) => {
  console.log("icon recieved");
})

app.post('/merchants', (req, res) => {
  merchant_model.createMerchant(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/merchants/:id', (req, res) => {
  merchant_model.deleteMerchant(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.put('/merchants/:id', (req, res) => {
  console.log("calling update merchant");
  merchant_model.updateMerchant(req.params.id, req.body)
  .then(response => {
    res.status(200).send(response);
  })
  // .catch(error => {
  //   res.status(500).send(error);
  // })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// implement merchant table routing

module.exports = router;

