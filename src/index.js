import express from 'express';
import path from 'path';
const app = express();
const port = 3000;
import fs from 'fs';

import expressCallback from './expressCallback.js'
import getCardData from '../src/controller/index.js';

app.get('/', (req, res) => {
  res.send("<h1>Hello World</h1>");  
});


app.get('/api/cards', expressCallback(getCardData));

/*
//Reads json file and applies it to variable card  
let card;    
fs.readFile("./src/data/magicCard.json", (err, cardData) => {
    if (err) {
        console.log("File read failed:", err);
    }
    try{
        card = JSON.parse(cardData);
        console.log(card);
    }
    catch(err) {
        console.log('Error parsing JSON string:', err);
    }
})
*/
                    

/*
//API call to get json object
app.get('/api/cards', (req,res) => {
    res.json(card);
});

                    
//API to get single card
app.get('/api/cards/:id', (req,res) => {
    res.json(card.filter(card => card.id === parseInt(req.params.id)));
});

*/







/*
// Set Static folder
app.use(express.static(path.join(__dirname,'public')));
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
