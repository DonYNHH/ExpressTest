export default function makeExpressCallback(controller){
    return (req,res) => {res.json(controller())}
    }
