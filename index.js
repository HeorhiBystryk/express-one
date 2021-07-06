const express = require('express')
const config = require('config')
const helmet = require("helmet");
const trace = require("./middleware/trace");
const logger = require("./middleware/logger");
const { exceptionHandler } = require("./middleware/exception.handler");
const bodyParser = require('body-parser')

const index = express()

// middleware
index.use(helmet())
index.use(trace)
index.use(logger)

index.use(bodyParser.urlencoded({extended: false}))
index.use(bodyParser.json())

//modules
const createModules = require('../express-one/modules')
const modules = createModules()
modules.forEach(module => index.use(module.router))

// exception handling
// index.use(exceptionHandler.exceptionHandler);
index.use(exceptionHandler);

const PORT = config.get('port') || 5000

index.listen(PORT, (err) => {
    console.log(`App has been started on port ${PORT}...`)
})
