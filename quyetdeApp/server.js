const express = require('express');
const path = require('path');

const app = express();

// public folder

app.use(express.static('public'));

//method + address
app.get('/', (req, res) => {
    res.send('hello World');
});
app.get('/ask', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/ask.html'));
});


app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('3000');
    }
});