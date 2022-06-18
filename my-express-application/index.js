/*const serverless = require('serverless-http');
const express = require("express");
//const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
//const dotenv = require('dotenv').config()
const port = process.env.PORT || 2000;

//enabling cors
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add router in express
//app.use("/", router);

//POST route
//router.post("/post", async (req, res) => {
app.post("/post", async (req, res) => {
//Destructuring response token from request body
    const {token} = req.body;

//sends secret key and response token to google
    await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${token}`
      );

//check response status and send back to the client-side
      if (res.status(200)) {
        res.send(true);
    }else{
      res.send(false);
    }
});

	
app.get('/', function (req, res) {
    res.send('Hello World!')
})

module.exports.handler = serverless(app);
	





const serverless = require('serverless-http');
const express = require('express')
const app = express()

function generateResponse (code, payload) {
    return {
      statusCode: code,
      headers: {
        'Access-Control-Allow-Origin': myDomain,
        'Access-Control-Allow-Headers': 'x-requested-with',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(payload)
    }
}

  
app.post('/post', async (req, res) => {
  //res.send('Hello World!')
    //Destructuring response token from request body
    const {token} = req.body;
    
    //sends secret key and response token to google
    await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=6Lejw3YgAAAAAHbfZJxOwvqmQ2u962DBNeS5dZ_f&response=${token}`
    );
    //check response status and send back to the client-side
    if (res.status(200)) {
        res.send(true);
    }else{
        res.send(false);
    }
})

//app.post('/post', async (req, res) => {


//});


module.exports.handler = serverless(app);*/



/*function validateCaptcha (body) {
    const token  = JSON.parse(body);
    let validation = { 'help': 'helpme'};
    console.log(token)
    if (!token) {
      throw new Error('Missing token!')
    }
    var XMLHttpRequest = require('xhr2');
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open("POST", `https://www.google.com/recaptcha/api/siteverify?secret=6Lejw3YgAAAAAHbfZJxOwvqmQ2u962DBNeS5dZ_f&response=${token}`, true);
    req.setRequestHeader("Access-Control-Allow-Origin", '*');
    req.setRequestHeader("Access-Control-Allow-Headers", '*');
    req.onload = function(){
      if(req.status == 200) {       
        validation = JSON.stringify(req.response);
      }else {
        validation = JSON.stringify(req.response);
      }
    };
    req.send(null); 
    return validation
    
}*/

async function validateCaptcha (body) {
  const bodyObj  = JSON.parse(body);
  if (!bodyObj) {
    throw new Error('Missing token!')
  }
  
 const axios = require('axios');

  let resp = await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=6Lejw3YgAAAAAHbfZJxOwvqmQ2u962DBNeS5dZ_f&response=${bodyObj.token}`,
    {
      headers:{
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      }
  })
  resp = resp.data;
  if(!resp){
    resp = 'no response'
  }
  return resp;
}
  
function generateResponse (code, payload) {
      if(!payload){
        payload= payload + 'helpme'
      }

      return {
      statusCode: code,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"

      },

      body: JSON.stringify(payload)
    }
}
  
function generateError (code, err) {
    console.log(err)
    return {
      statusCode: code,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(err.message)
    }
}

module.exports.handler = async (event) => {
    try {
     // console.log('api reached')
      let validation;
      return validateCaptcha(event.body).then(response => generateResponse(200, response))
    } catch (err) {
      return generateError(500, err)
    }
}





/*const serverless = require('serverless-http');
const express = require("express");
//const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
//const dotenv = require('dotenv').config()
const port = process.env.PORT || 2000;

//enabling cors
app.use(cors());
app.use(express.urlencoded());
//Parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add router in express
//app.use("/", router);

//POST route
//router.post("/post", async (req, res) => {
app.post("/post", async (req, res) => {
//Destructuring response token from request body
    const {token} = req.body.token;

//sends secret key and response token to google
    await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6Lejw3YgAAAAAHbfZJxOwvqmQ2u962DBNeS5dZ_f&response=${token}`
      );

//check response status and send back to the client-side
    if (res.status(200)) {
      res.send(true);
    }else{
       res.send(false);
    }
});


module.exports.handler = serverless(app);*/