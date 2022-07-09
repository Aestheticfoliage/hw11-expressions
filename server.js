const express = require('express');

// iNITIALIZE THE APP AND CREATE A PORT
const app = express();
const PORT =  process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// HTML Routes

// API

// Start the server on the port
