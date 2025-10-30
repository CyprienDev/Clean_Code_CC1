import { describe, it, expect } from 'vitest';
import { calculScore } from "../yams";

describe('Yams Game', () => {
  it('retourne 50 pour un YAMS', () => {
    const lancers = [[1, 1, 1, 1, 1]];
    expect(calculScore(lancers)).toBe(50);
  });

  it('retourne somme des 5 dés pour un lancer sans combinaison(chance)', () => {
    const lancers = [[1, 2, 6, 4, 3]];
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

  it('retourne 28 pour un Brelan', () => {
    const lancers = [[3, 3, 3, 2, 1]];
    expect(calculScore(lancers)).toBe(28);
  });

  it('retourne 40 pour une Grande Suite qui se suit', () => {
    const lancers = [[1, 2, 3, 4, 5]];
    expect(calculScore(lancers)).toBe(40);
  });

  it('retourne 40 pour une Grande Suite qui se suit', () => {
    const lancers = [[2, 3, 4, 5, 6]];
    expect(calculScore(lancers)).toBe(40);
  });

  it('retourne 40 pour une Grande Suite en desordre', () => {
    const lancers = [[3, 5, 2, 4, 6]];
    expect(calculScore(lancers)).toBe(40);
  });

  it('calcule le score total pour plusieurs lancers', () => {
    const lancers = [
      [1, 1, 1, 1, 1], // YAMS 50
      [2, 2, 2, 2, 5], // CARRÉ 35
      [1, 1, 1, 4, 4], // FULL 30
      [3, 3, 3, 2, 1], // BRELAN 28
      [1, 2, 3, 4, 5]  // GRANDE SUITE 40
    ];
    expect(calculScore(lancers)).toBe(183);
  });
});