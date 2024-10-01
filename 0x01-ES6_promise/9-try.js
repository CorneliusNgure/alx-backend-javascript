export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction(); // Execute the provided function
    queue.push(result); // Append the result to the queue if no error occurs
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Append the error message if an error occurs
  } finally {
    queue.push('Guardrail was processed'); // Append this message in all cases
  }

  return queue; // Return the queue array
}
