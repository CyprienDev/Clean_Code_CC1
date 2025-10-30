import { calculScore } from './yams.js';

const lancers = [
  [6, 6, 6, 6, 6], // YAMS 50
  [2, 2, 2, 2, 5], // CARRÉ 35
  [1, 1, 1, 4, 4], // FULL 30
  [1, 2, 3, 4, 5], // GRANDE SUITE 40
  [3, 3, 3, 2, 1], // BRELAN 28
  [1, 2, 3, 4, 6]  // CHANCE (Somme des 5 dés)
];

try {
  const scoreTotal = calculScore(lancers);
  console.log(`\nScore total: ${scoreTotal} points`);
} catch (error) {
  console.error('Erreur:', error.message);
}