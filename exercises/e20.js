
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
    // Your code goes here...
    //Two arrays to hold names with and without 'a'
  let withA = [];
  let withoutA = [];
    // Loop through the main array
  for (let i = 0; i < array.length; i++) {
    // Check each name for the presence of 'a'
    let hasA = false;
    // Nested loop to check each character in the name
    for (let j = 0; j < array[i].length; j++) {
        // If 'a' is found, set hasA to true and break the inner loop
      if (array[i][j] === 'a') {
        // If 'a' is found, set hasA to true and break the inner loop
        hasA = true;
        break;
      }
    }
    // Depending on whether 'a' was found, push the name to the appropriate array
    if (hasA) {
        // If 'a' is found, push the name to the withA array
      withA.push(array[i]);
    } else {
        // If 'a' is not found, push the name to the withoutA array
      withoutA.push(array[i]);
    }
  }
  return [withA, withoutA];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
