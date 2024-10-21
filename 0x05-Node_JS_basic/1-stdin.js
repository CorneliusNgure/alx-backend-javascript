console.log('Welcome to Holberton School, what is your name?');

// Listen for data (user input) on stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Get the input and trim any extra spaces/newlines
  console.log(`Your name is: ${name}`);

  // After displaying the name, exit the process gracefully
  process.exit();
});

// Handle the process exit event
process.on('exit', () => {
  console.log('This important software is now closing');
});
