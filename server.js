const express = require('express');
const path = require('path');
const fs = require('fs');

const notesRoutes = require('./routes/apiRoutes/notes.js');
const htmlRoutes = require('./routes/htmlRoutes/html.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/assets')));
app.use('/api/', notesRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});