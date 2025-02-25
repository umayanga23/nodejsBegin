const { readFile, writeFile } = require('fs');

readFile('./path/second/second.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./path/one.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      './path/second/second.txt',
      `Here: ${first} , ${second}`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
