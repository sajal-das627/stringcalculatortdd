# stringcalculatortdd

Jest Unit Test Cases
First, make sure you have Jest installed in your project. You can install it via npm:
npm install --save-dev jest
Basic Setup
Create a file named StringCalculator.js for the implementation and StringCalculator.test.js for the test cases.

StringCalculator.js

Running the Tests
To run the tests, add a script in your package.json:
Then run:
npm test

Key Points to Remember:
Start Simple: Begin with the simplest case and gradually add complexity.
TDD Process: Write a failing test, implement the simplest code to pass the test, then refactor.
Exception Handling: Ensure the function correctly handles exceptional cases, like negative numbers.
Custom Delimiters: Handle cases with different delimiters by parsing the input accordingly.
