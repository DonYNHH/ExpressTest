import listCards from '../usecase/index.js';
import makeGetCards from './makeListCard.js';

const getCardData = makeGetCards(listCards);

export default getCardData;
