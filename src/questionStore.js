
class QuestionStore {
    constructor() {
      this.questions = [];
    }
  
    addQuestion(question, subject, topic, difficulty, marks) {
      this.questions.push({ question, subject, topic, difficulty, marks });
    }
  
    getQuestions() {
      return this.questions;
    }
  }
  
  module.exports = QuestionStore;
  