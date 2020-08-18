import makeGetCards from './listCard.js';
import getCards from '../data/db.js' 



const listCards = makeGetCards(getCards);

export default listCards;