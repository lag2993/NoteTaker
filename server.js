const express = require('express');
const htmlRoutes = require('./public/routes/htmlRoutes');
const apiRoutes = require('./public/routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middle ware:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// set use for routes. 
app.use('/',htmlRoutes);
app.use('/api',apiRoutes);
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });