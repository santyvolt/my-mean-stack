const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.write('hello worls');
    res.end();
});

app.listen(3000, function () {
    console.log('Listening to 3000');
});

console.log('dd');