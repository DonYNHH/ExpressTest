export default function makeExpressCallback(controller){
    return (req,res) => {controller().then( response => res.json(response));}
    
    }
