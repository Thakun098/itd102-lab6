require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 5000;

// Import = Require: Routes to server.js
require("./app/routes/user.routes")(app);


app.listen(PORT, () => console.log('Server is running ' + PORT));