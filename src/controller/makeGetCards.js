
export default function makeGetCards ( cardData ){
    
    return function getCards(){
        console.log("controller");
        return cardData;
    }
    
    
    // // return ((req,res) => {
    // //     res.json(cardData);
    // // }
    // );
}