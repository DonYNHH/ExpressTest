
export default function makeGetCards ( cardData ){
    
    return function getCards(){
        return cardData;
    }
    
    
    // // return ((req,res) => {
    // //     res.json(cardData);
    // // }
    // );
}