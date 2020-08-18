

export default function makeGetCards(cardsdb){
    return function listCards(){
        cards = JSON.parse(cardsdb);
        return cards;
    }
}



//   return(
//     fs.readFile(path, (err, cardData) => {
//     if (err) {
//         console.log("File read failed:", err);
//         return;
//     }
//     try{
//         console.log(cardData);
//         let card = JSON.parse(cardData);
//         return card;
//     }
//     catch(err) {
//         console.log('Error parsing JSON string:', err);
//     }

// })


// )





