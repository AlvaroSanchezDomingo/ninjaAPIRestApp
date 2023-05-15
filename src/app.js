const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/user_route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoute);

module.exports = app;
