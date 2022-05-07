let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  // [{exams:, exercises:}, st2, st3, st4, st5]
  
  let examData = scoreData.map(score => score.exams);
  // [[n1, n2, n3, n4], []]
  
  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let examScores = scoreObj.exams;
  let exerciseScores = scoreObj.exercises;

  let averageExamScore = getAverageExamScore(examScores);
  let totalExerciseScore = exerciseScores.reduce((total, val) => total + val);
  let weightedPercentage = Math.round(getWeightedPercentage(averageExamScore, totalExerciseScore));
  let letterGrade = getLetterGrade(weightedPercentage);
  return `${String(weightedPercentage)} (${letterGrade})`;
}

function getAverageExamScore(examScores) {
  let totalScores = examScores.reduce((total, val) => total + val);
  return totalScores / examScores.length;
}

function getWeightedPercentage(examScore, exerciseScore) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;
  
  return (examScore * EXAM_WEIGHT) + (exerciseScore * EXERCISE_WEIGHT);
}

function getLetterGrade(percentage) {
  if (percentage >= 93) {
    return 'A';
  } else if (percentage >= 85) {
    return 'B';
  } else if (percentage >= 77) {
    return 'C';
  } else if (percentage >= 69) {
    return 'D';
  } else if (percentage >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getExamSummary(examData) {  
  let groupedExams = groupExams(examData);
  
  return groupedExams.map(exam => getExamInfo(exam));
}

function groupExams(examData) {
  let numberOfExams = examData[0].length;
  let groupedExams = [];
  
  for (let index = 0; index < numberOfExams; index += 1) {
    groupedExams.push(performGrouping(examData, index));
  }
  
  return groupedExams;
}

function performGrouping(examData, index) {
  return examData.map(studentData => studentData[index]);
}

function getExamInfo(exam) {
  let averageScore = getAverageExamScore(exam).toFixed(1);
  let minimum = Math.min(...exam);
  let maximum = Math.max(...exam);
  
  return {
    average: averageScore,
    minimum: minimum,
    maximum: maximum,
  };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }