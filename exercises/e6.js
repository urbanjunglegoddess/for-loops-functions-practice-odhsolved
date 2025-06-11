// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

export function getClientWithNoMoney(array) {
  // Your code goes here...
    const holderNames = [];
    for (const value of array) {
        if (value.name && typeof value.name === 'string'&& value.balance === 0) {
            holderNames.push(value.name);
        }
    }
    return holderNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
