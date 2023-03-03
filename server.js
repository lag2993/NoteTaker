const express = require('express');
const landP = require('./public/index.html');
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

// Error response
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });