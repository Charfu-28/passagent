const express = require('express');
const requestData = require('./data');
const app = express();
const port = process.env.port || 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const validateHeaders = (req, res, next) => {
    if(req.header == null){
        res.status(500).send("ERROR HEADERS")
    }
    next();
};

const validateBody = (req, res, next) => {
    const body = req.body 

    if (body.data != null) {
        res.status(500).send("ERROR BODY")
    }
    next();
};

app.use(validateHeaders);
app.use(validateBody);

app.get('/', (req, res) => {
    res.send('<h1>API PRUEBA</h1>')
   })

app.post('/passagent-requestchat', (req, res) => {
 let request = JSON.stringify(requestData);
  res.json(JSON.parse(request));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

