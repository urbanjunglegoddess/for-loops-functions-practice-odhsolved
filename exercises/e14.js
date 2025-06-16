
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
    // Your code goes here...
// An empty array to store the accounts with wrong balance
    let result = [];
    //Iterate over the array of bank accounts
    for ( let i = 0 ; i < array.length ; i++ ) {
        // Check if the account has a balance property
        // if ( array.balance === 0 ) {
        //     return `No balance found for account ${ array[i].name }`;
        // }
        //Make the sum of deposits and withdrawals into variables
        const depositSum = sumDeposits(array[i].deposits || []);
        const withdrawalSum = sumWithdrawals(array[i].withdrawals || []);

        // Calculate the sum of deposits and withdrawals
        if ( depositSum - withdrawalSum !== array[i].balance ) {
            // If the balance is wrong, push the account to the result array
            result.push ( array[i] )
        }
        // If the balance is correct, do nothing

    };
return result;

}


const sumDeposits = ( deposits ) => {
    let sum = 0;
    for ( let j = 0 ; j < deposits.length ; j++ ) {
        sum += deposits[j];
    }
    return sum;
};

const sumWithdrawals = ( withdrawals ) => {
    let sum = 0;
    for ( let j = 0 ; j < withdrawals.length ; j++ ) {
        sum += withdrawals[j];
    }
    return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
