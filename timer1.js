const args = process.argv;
nums = args.slice(2);

// no numbers are provided
if (nums.length === 0 ) {}

for (let item of nums) {
  // an input is a negative number
  if (item < 0 || isNaN(item)) {
  } else {
    setTimeout(() => {process.stdout.write('\x07')}, item);
  }
}
