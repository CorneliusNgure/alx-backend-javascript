// Check if stdin is being piped or used interactively
if (process.stdin.isTTY) {
    console.log("Welcome to Holberton School, what is your name?");
    process.stdin.on('data', (input) => {
        const name = input.toString().trim(); // trim whitespace
        console.log(`Your name is: ${name}`);
        process.exit();
    });
} else {
    // Piped input mode
    let input = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
        input += chunk;
        process.exit();
    });
    process.stdin.on('end', () => {
        const name = input.trim(); // Trim any extra whitespace
        console.log("Welcome to Holberton School, what is your name?");
        console.log(`Your name is: ${name}`);
        console.log("This important software is now closing");
    });
}

// Handle the end of the program
process.stdin.on('end', () => {
    if (process.stdin.isTTY) {
        console.log("This important software is now closing");
    }
});
