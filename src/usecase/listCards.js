

export default function makeListCards(cardsdb){
    return async function listCards(){
        let cards = await cardsdb();
        
        console.log("hello");
        let isArr = Array.isArray(cards);
        console.log(isArr);

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





