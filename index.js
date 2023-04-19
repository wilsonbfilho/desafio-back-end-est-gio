const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const options = {
    hostname: hostname,
    port: port,
    path: '/',
    method: 'GET'
  };
  
  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
  
    res.on('data', (data) => {
      console.log(data.toString());
    });
  });
  
  req.on('error', (error) => {
    console.error(error);
  });
  
  req.end();