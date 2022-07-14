const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// iNITIALIZE THE APP AND CREATE A PORT
const app = express();
const PORT =  process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
// api
  
  app.use('/api', apiRoutes);
  // HTML Routes
  app.use('/', htmlRoutes);
  
  // Start the server on the port
  

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
