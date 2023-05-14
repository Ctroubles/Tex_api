const { Router }= require("express");
const axios = require('axios');


const payment_routes = Router();

const URL_GET_TOKEN_VISA = 'https://apitestenv.vnforapps.com/api.security/v1/security'
const URL_GET_SESSION_VISA = 'https://apitestenv.vnforapps.com/api.ecommerce/v2/ecommerce/token/session/'
// const URL_TRANSACTION_VISA = 'https://apitestenv.vnforapps.com/api.authorization/v3/authorization/ecommerce/'
// const AUTH_BASE64 = 'aW50ZWdyYWNpb25lcy52aXNhbmV0QG5lY29tcGx1cy5jb206ZDVlN25rJE0='

payment_routes.post("/getAccesToken", async (req, res) =>{
    try {
        const {data} = await axios.get(URL_GET_TOKEN_VISA, {
            headers: {
              'Host': 'apisandbox.vnforappstest.com',
              'Authorization': 'Basic aW50ZWdyYWNpb25lcy52aXNhbmV0QG5lY29tcGx1cy5jb206ZDVlN25rJE0='
            }
          })
  
          if (data) res.status(201).json(data)
          else throw new Error

    } catch (error) {
        res.status(400).json(error);
    };

  });

payment_routes.post("/getSessionToken", async (req, res) =>{
      try {
          const headers = {
              'Content-Type': 'application/json',
              'Authorization': req.body.token,
            };
            
            const body = {
              channel: 'web',
              amount: req.body.totalPriceNumber,
              antifraud: {
                clientIp: req.body.ip,
                merchantDefineData: {
                  MDD15: 'Valor MDD 15',
                  MDD20: 'Valor MDD 20',
                  MDD33: 'Valor MDD 33'
                }
              }
            };
            const {data} = await axios.post( URL_GET_SESSION_VISA + '522591303', body, { headers })
            if (data) res.status(201).json(data)
      } catch (error) {
          res.status(400).json(error);
      }
  })






module.exports = payment_routes;