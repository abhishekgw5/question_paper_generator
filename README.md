# Question Paper Generator

This is a simple Question Paper Generator application written in Node.js. The application generates question papers based on the difficulty distribution specified.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/abhishekgw5/question_paper_generator
   cd question-paper-generator

2. **Install Dependencies:**
    ```bash
   npm install
    
## Usage
1. **Update Sample Questions:**
    ```javascript
      // main.js
      // Add more sample questions
      questionStore.addQuestion("What is the speed of light", "Physics", "Waves", "Easy", 5);
      // Add more questions as needed...
      ```

3. **Adjust Difficulty Distribution:**

      Open `src/main.js` and adjust the difficulty distribution percentages based on your requirements.

      ```javascript
      // main.js

      // Define the difficulty distribution
      const difficultyDistribution = [
        { difficulty: 'Easy', percentage: 20 },
        { difficulty: 'Medium', percentage: 50 },
        { difficulty: 'Hard', percentage: 30 },
      ];
      ```
3. **Run the Application:**

      ```bash
      npm start
      ```

      This command will execute the `main.js` file and generate a question paper based on the specified difficulty distribution.

## Customization

- **Adding More Questions:**
  You can add more questions in the `questionStore` by following the format:

  ```javascript
  // main.js
  questionStore.addQuestion("Your question here", "Subject", "Topic", "Difficulty", Marks);
  // Add more questions as needed...

- **Modifying Difficulty Distribution:**
   Adjust the difficulty distribution percentages in the difficultyDistribution array in main.js based on your preferences.
