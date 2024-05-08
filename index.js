// ./index.js
const express = require('express')

const app = express()

app.get('/', (_req, res) => {
 res.send(`
  This "Hello world!" is powered by Terraform AWS Modules!
  The ISO datetime right now is ${new Date().toISOString()}.
 `)
})

const port = 3000;

app.listen(port, () => {
 console.log(`Listening on port ${port}`)
})