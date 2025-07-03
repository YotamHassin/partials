const express = require('express');
const app = express();
const ngrok = require('ngrok');
process.env.PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    //res.send('Hello World I am running locally');
    let path ="/media/yhotamel/+התקנות/התקנות/Dos Zip.rar";
    res.sendFile(path)
});

const server = app.listen(process.env.PORT, () => {
    console.log('Running at localhost:' + process.env.PORT);
});

ngrok.connect({
    proto : 'http',
    addr : process.env.PORT,
}, (err, url) => {
    if (err) {
        console.error('Error while connecting Ngrok',err);
        return new Error('Ngrok Failed');
    }
});