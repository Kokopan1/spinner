
let arr1 = [('\r|   '), ('\r/   '), ('\r-   '), ('\r\\   '), ('\r|   '), ('\r/   '), ('\r-   '), ('\r\\   '), ('\r|   '), ('\r/   '), ('\r-   '), ('\r\\   '), ('\r|   '), ('\r/   '), ('\r-   '), ('\r\\   ')];

const delay = function(arr) {
  let counter = 0;

  for (const inner of arr) {
    setTimeout(() => {
      process.stdout.write(inner);
    }, counter * 200);
    counter++;
  }
};

delay(arr1);