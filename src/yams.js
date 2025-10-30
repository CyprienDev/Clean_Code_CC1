export function calculScore(lancers) {
  const des = lancers[0];
  if (des.every(val => val === des[0])) {
    return 50;
  }
  return 0;
}