export default function makeExpressCallback(controller){
    
    return (req,res) => { 

        /*let idValid = {
            id:req.param.id
        }
        */
        controller().then( response => res.json(response));
        
         /*   
        let id = req.param.id;
        if (id !== ''){
            controller().then( response => res.json(response.filter(response => response.id === parseInt(req.params.id))));
        }else{
            controller().then( response => res.json(response));
        }
        */

    }

}


    