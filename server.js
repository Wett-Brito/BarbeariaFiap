const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios');
const port = 80;
const API_AGENDAMENTO_URL = process.env.API_AGENDAMENTO_URL;
const API_AGENDAMENTO_PORT = process.env.API_AGENDAMENTO_PORT;
const API_SERVICO_URL = process.env.API_SERVICO_URL;
const API_SERVICO_PORT = process.env.API_SERVICO_PORT;
const API_UNIDADE_URL = process.env.API_UNIDADE_URL;
const API_UNIDADE_PORT = process.env.API_UNIDADE_PORT;

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/my-app/"));

app.get('/unities', (req, res) => {
    axios.get(`http://${API_UNIDADE_URL}:${API_UNIDADE_PORT}/unities`)
        .then((response) => {
            res.json(response.data);  
            // console.log(response.data);
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
        })
        .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              // console.log(error.response.data);
              // console.log(error.response.status);
              // console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              // console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              // console.log('Error', error.message);
            }
            // console.log(error.config);
            res.status(500).send(error.response.data);
          });
});

app.get('/services', (req, res) => {
  axios.get(`http://${API_SERVICO_URL}:${API_SERVICO_PORT}/services`)
      .then((response) => {
          res.json(response.data);
      })
      .catch(function (error) {
          res.status(500).send(error.response.data);
        });
});

app.post('/appointments', (req, res) => {
  axios.post(`http://${API_AGENDAMENTO_URL}:${API_AGENDAMENTO_PORT}/appointments`, req.body)
      .then((response) => {
          res.json(response.data);
      })
      .catch(function (error) {
          res.status(500).send(error.response.data);
        });
});

app.get('/appointments', (req, res) => {
  axios.get(`http://${API_AGENDAMENTO_URL}:${API_AGENDAMENTO_PORT}/appointments`)
      .then((response) => {
          res.json(response.data);
      })
      .catch(function (error) {
          res.status(500).send(error.response.data);
        });
});

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/my-app/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});