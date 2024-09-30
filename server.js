const express = require('express');
const app = express();

const db=require('./db');

require('dotenv').config()
const bodyParser= require('body-parser');
app.use(bodyParser.json()); // req.body

const PORT=process.env.PORT || 3000 

app.get('/', function (req, res) {
  res.send('Welcome to my hotel....')
})

//Import the rounter files
const personRountes= require('./routes/personRoutes')
const menuRountes=require('./routes/menuRounter')

//Use the rounter
app.use('/person',personRountes)
app.use('/menu',menuRountes)

app.listen(PORT,()=>{
  console.log('Listening on port 3000');
})