const express = require('express');
const app = express();
const http = require('http').createServer(app);

http.addListener;isten(5000, function(){
    console.log('[SERVER STARTED AT PORT 5000]');
})