class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    const totalQuestions = this.questionStore.getQuestions();

    difficultyDistribution.forEach(({ difficulty, percentage }) => {
      const questionsOfDifficulty = this.filterQuestionsByDifficulty(
        totalQuestions,
        difficulty
      );
      const numberOfQuestions = Math.floor((percentage / 1000) * totalMarks);

      console.log(
        `Difficulty: ${difficulty}, Available: ${questionsOfDifficulty.length}, Required: ${numberOfQuestions}`
      );

      if (questionsOfDifficulty.length >= numberOfQuestions) {
        const selectedQuestions = this.shuffleArray(
          questionsOfDifficulty
        ).slice(0, numberOfQuestions);
        questionPaper.push(...selectedQuestions);
      } else {
        console.error(`Not enough questions of difficulty ${difficulty}`);
      }
    });

    return questionPaper;
  }

  filterQuestionsByDifficulty(questions, difficulty) {
    return questions.filter((question) => question.difficulty === difficulty);
  }

  shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}

module.exports = QuestionPaperGenerator;
