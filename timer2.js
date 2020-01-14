const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  // if key 'b' is pressed sound right away
  if (key === '\u0062') {
    process.stdout.write('\x07')
  }
  // if numbers from 1-9 are pressed
  let numCodes = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039'];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numCodes.length; i++) {
    if (key === numCodes[i]) {
      console.log(`setting timer for ${numbers[i]} seconds...`)
      setTimeout(() => {process.stdout.write('\x07')}, numbers[i]*1000);
    }
  }
});