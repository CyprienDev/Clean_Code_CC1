import { describe, it, expect } from 'vitest';
import { calculScore } from "../yams";

describe('Yams Game', () => {
  it('retourne 50 pour un YAMS', () => {
    const lancers = [[1, 1, 1, 1, 1]];
    expect(calculScore(lancers)).toBe(50);
  });

  it('retourne somme des 5 dés pour un lancer sans combinaison(chance)', () => {
    const lancers = [[1, 2, 3, 4, 5]];
    expect(calculScore(lancers)).toBe(15);
  });

  it('retourne 35 pour un carré', () => {
    const lancers = [[2, 2, 2, 2, 5]];
    expect(calculScore(lancers)).toBe(35);
  });

  it('retourne 30 pour un full', () => {
    const lancers = [[1, 1, 1, 4, 4]];
    expect(calculScore(lancers)).toBe(30);
  });

  it('prend en compte la meilleure combinaison', () => {
    const lancers = [[1, 1, 1, 1, 2]];
    expect(calculScore(lancers)).toBe(35);
  });

  it('calcule le score total pour plusieurs lancers', () => {
    const lancers = [
      [1, 1, 1, 1, 1], // YAMS 50
      [2, 2, 2, 2, 5], // CARRÉ 35
      [1, 1, 1, 4, 4]  // FULL 30
    ];
    expect(calculScore(lancers)).toBe(115);
  });
});