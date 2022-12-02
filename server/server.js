const dotenv = require("dotenv").config();
const express = require("express");
const {errorHandler} = require("./middleware/errorHandler");

// Establish database connection

const app = express();
const port = process.env.EXPRESSPORT;

app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api', require("./routes/volunteer"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});