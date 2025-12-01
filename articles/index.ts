// Central index for all articles
// Import category indices
import { creditCardsArticles } from './credit-cards';
import { airlineMilesArticles } from './airline-miles';
import { hotelStatusArticles } from './hotel-status';
import { investingBasicsArticles } from './investing-basics';
import { retirementArticles } from './retirement';
import { digitalNomadArticles } from './digital-nomad';
import { budgetingArticles } from './budgeting';
import { insuranceArticles } from './insurance';
import { luxuryTravelArticles } from './luxury-travel';
import { globalEconomyArticles } from './global-economy';

export const allArticles = {
  'credit-cards': creditCardsArticles,
  'airline-miles': airlineMilesArticles,
  'hotel-status': hotelStatusArticles,
  'investing-basics': investingBasicsArticles,
  'retirement': retirementArticles,
  'digital-nomad': digitalNomadArticles,
  'budgeting': budgetingArticles,
  'insurance': insuranceArticles,
  'luxury-travel': luxuryTravelArticles,
  'global-economy': globalEconomyArticles,
};
