const express = require('express')

// create new express object.  "new" keyword not used in js
const app = express()

// add http request handlers
let Dog = (req, res) => {
    res.writeHead(200)
    res.write('my dog name is king')
    res.end()
}

let cat = (req, res) => {
    res.writeHead(200)
    res.write('my cat name is tom ')
    res.end()
}

let index = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200)
        res.write('Home Page')
        res.end()
    }
    else {
        res.writeHead(404)
        res.write('hi')
        res.end()
    }
}

// route http requests to our handler function
// index path must go last or it executes on all urls
app.use('/Dog', Dog)
app.use('/cat', cat)
app.use('/', index)

// start express web server
app.listen(3000)
console.log('Express running on port 3000')