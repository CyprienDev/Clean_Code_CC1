import { describe, it, expect } from 'vitest';
import { calculScore } from "../yams";

describe('Yams Game', () => {
  it('retourne 50 pour un YAMS', () => {
    const lancers = [[1, 1, 1, 1, 1]];
    expect(calculScore(lancers)).toBe(50);
  });

  it('retourne 0 pour un lancer sans combinaison', () => {
    const lancers = [[1, 2, 3, 4, 5]];
    expect(calculScore(lancers)).toBe(0);
  });
});