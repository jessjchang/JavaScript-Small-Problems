function getGrade(score1, score2, score3) {
  let average = calculateAverage(score1, score2, score3);
  
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
