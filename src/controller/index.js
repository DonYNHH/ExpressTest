import listCards from '../usecase/index.js';
import makeGetCards from './makeGetCards.js';

const getCardData = makeGetCards(listCards());

export default getCardData;
