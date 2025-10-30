function compterOccurrences(des) {
  const counts = {};
  for (const de of des) {
    counts[de] = (counts[de] || 0) + 1;
  }
  return counts;
}

function calculerScoreLancer(des) {
  const counts = compterOccurrences(des);
  const sorted = [...des].sort((a, b) => a - b);

  // YAMS
  if (Object.values(counts).some(count => count === 5)) {
    return 50;
  }

  // CARRÉ
  if (Object.values(counts).some(count => count >= 4)) {
    return 35;
  }

  // FULL
  const values = Object.values(counts);
  if ((values.includes(3) && values.includes(2)) || values.filter(v => v === 3).length === 2) {
    return 30;
  }
  
  // GRANDE SUITE
  const uniqueSorted = [...new Set(sorted)].sort((a, b) => a - b);
  const estGrandeSuite = uniqueSorted.length === 5 && 
                        (uniqueSorted[4] - uniqueSorted[0] === 4);
  if (estGrandeSuite) {
    return 40;
  }
  
  // BRELAN
  if (Object.values(counts).some(count => count >= 3)) {
    return 28;
  }
  
  // CHANCE
  return des.reduce((sum, val) => sum + val, 0);
}

export function calculScore(lancers) {
  return lancers.reduce((total, lancer) => {
    if (!Array.isArray(lancer) || lancer.length !== 5) {
      throw new Error('Chaque lancer doit contenir exactement 5 dés');
    }

    return total + calculerScoreLancer(lancer);
  }, 0);

}