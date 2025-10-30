import { calculScore } from './yams.js';

const lancers = [
  [6, 6, 6, 6, 6], // YAMS
  [2, 2, 2, 2, 5], // CARRÉ
  [1, 1, 1, 4, 4], // FULL
  [1, 2, 3, 4, 5], // GRANDE SUITE
  [3, 3, 3, 2, 1], // BRELAN
  [1, 2, 3, 4, 6]  // CHANCE
];

try {
  const scoreTotal = calculScore(lancers);
  console.log(`\nScore total: ${scoreTotal} points`);
} catch (error) {
  console.error('Erreur:', error.message);
}