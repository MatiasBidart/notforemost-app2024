const express = require('express');
const connectDB = require('./utils/db/db.connect.conf');
const config = require('./config');
const manageDataFunction = require('./functions/manageDataFunction');
const provision = require('./utils/provision');
const articlesRouter = require('./articles/articles.routes');
const cors = require('cors');

const app = express();
app.use(express.json());
connectDB();
app.use(cors()); 

// Provision and route to see the changes
manageDataFunction(provision);
app.use('/api/', articlesRouter);


const PORT = config.port ;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
