// server.js
// where your node app starts

// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app = express();



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(bodyParser.json()); 
app.use(cors()); 

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.post('/upload', upload.single('file'), function(req,res,next){

return res.json(req.file);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Everythings working');
})
