const sentence = 'hello there from lighthouse labs';

/*
// Delay the display with setTimeout
setTimeout(() => {
  // Print the char here
  // Loop through each character in the sentence
  for (const char of sentence) {
    process.stdout.write(char);
  }
  console.log('\n');
}, 1000);
*/

// Loop through each character in the sentence and add a delay
for (let i = 0; i < sentence.length; i++) {
  // Delay the display with setTimeout
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    // Add newline character at the end of the sentence
    if (i === sentence.length - 1) {
      console.log('\n')
    }
  }, i * 50);
}