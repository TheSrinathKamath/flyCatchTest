"use strict";

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

/* =================================================================================================== */
/*                              Initialising Express & other dependencies                              */
/* =================================================================================================== */

const express = require('express');
const cors = require('cors')
const gzip = require('compression');
const path = require('path');

/* =================================================================================================== */
/*                          Data server to handle data transfer & processing                           */
/* =================================================================================================== */

const app = express();
app.use(express.static('/public/html'));

app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    next();
});

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false }))
app.use(gzip()); // for GZIP COMPRESSION

/* =================================================================================================== */
/*                          HTTP server to handle data transfer over SSL                               */
/* =================================================================================================== */
const PORT = process.env.PORT;
const IP = process.env.IP;
app.listen(PORT, IP, () => {
    console.log(`Server listening on ${IP}:${PORT}`);
});

const post_routes = require('./routes/posts');
app.use('/', post_routes);

app.use('/*', (req, res) => { res.status(404).sendFile(path.resolve(__dirname, 'public/html/', '404.html')); })