function compterOccurrences(des) {
  const counts = {};
  for (const de of des) {
    counts[de] = (counts[de] || 0) + 1;
  }
  return counts;
}

function calculerScoreLancer(des) {
  const counts = compterOccurrences(des);
  
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