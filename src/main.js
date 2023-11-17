const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');

const questionStore = new QuestionStore();

questionStore.addQuestion("What is the speed of light", "Physics", "Waves", "Easy", 5);
questionStore.addQuestion("What is the formula for calculating gravitational force?", "Physics", "Forces", "Easy", 5);
questionStore.addQuestion("Name the scientist who formulated the laws of motion.", "Physics", "Motion", "Easy", 4);
questionStore.addQuestion("What is the capital of France?", "Geography", "Countries", "Easy", 3);
questionStore.addQuestion("Define the concept of inertia.", "Physics", "Motion", "Easy", 4);
questionStore.addQuestion("Name the largest planet in our solar system.", "Astronomy", "Planets", "Easy", 5);
questionStore.addQuestion("What is the chemical symbol for gold?", "Chemistry", "Elements", "Easy", 3);

questionStore.addQuestion("Explain the concept of photosynthesis.", "Biology", "Ecology", "Medium", 8);
questionStore.addQuestion("Who proposed the theory of evolution by natural selection?", "Biology", "Evolution", "Medium", 7);
questionStore.addQuestion("What is the atomic number of carbon?", "Chemistry", "Elements", "Medium", 6);
questionStore.addQuestion("Explain the process of cell division.", "Biology", "Cell Biology", "Medium", 8);
questionStore.addQuestion("Who discovered penicillin?", "Biology", "Microbiology", "Medium", 7);
questionStore.addQuestion("What is the pH scale used for?", "Chemistry", "Acids and Bases", "Medium", 6);

questionStore.addQuestion("Solve the quadratic equation: x^2 - 4x + 4 = 0.", "Mathematics", "Algebra", "Hard", 10);
questionStore.addQuestion("What is the derivative of ln(x) with respect to x?", "Mathematics", "Calculus", "Hard", 12);
questionStore.addQuestion("State and prove the Pythagorean theorem.", "Mathematics", "Geometry", "Hard", 15);
questionStore.addQuestion("Solve the system of equations: 2x + y = 5, x - y = 3.", "Mathematics", "Linear Algebra", "Hard", 10);
questionStore.addQuestion("What is the limit of (sin(x))/x as x approaches 0?", "Mathematics", "Calculus", "Hard", 12);
questionStore.addQuestion("Prove the convergence of the series: Σ (1/n^2) from n = 1 to ∞.", "Mathematics", "Analysis", "Hard", 15);


const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

const difficultyDistribution = [
  { difficulty: 'Easy', percentage: 20 },
  { difficulty: 'Medium', percentage: 50 },
  { difficulty: 'Hard', percentage: 30},
];

const questionPaper = questionPaperGenerator.generateQuestionPaper(100, difficultyDistribution);

console.log("Generated Question Paper:");
console.log(questionPaper);
