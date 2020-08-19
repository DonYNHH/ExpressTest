
export default function makeGetCards ( cardData ){
    
    return function getCards(){
        console.log("controller");
        let card = cardData;
        let isArr = Array.isArray(card);
        console.log(isArr);
        /*
        if(id === null){
            return card
        }else{
            let selectedCard = cardData.find(selectedCard =>  selectedCard.id === id) 
            return selectedCard;
        }
        */

        return card;
    }
    
    
    // // return ((req,res) => {
    // //     res.json(cardData);
    // // }
    // );
}