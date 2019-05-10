const express = require('express');
const bodyParser = require('body-parser');
const port = 3737;
const axios = require('axios');

const app = express();

app.use(`/dist`, express.static('public/dist'));
app.use(bodyParser.json());
app.use(`/`, express.static('public'));

function bitcoinModelGet(){
    return axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2014-09-05')
            .then(response => response.data)
}


function bitcoinControllerGet (req, res, next) {
    console.log(req.query);
    bitcoinModelGet()
    .then(data => res.send(data) )
    .catch( (err) => { console.log(err);
      res.sendStatus(500) })
}
  

//routes
app.get(`/api`, bitcoinControllerGet );


app.listen(port);