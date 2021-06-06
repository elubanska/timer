//process.stdout.write('\x07');

const beepTime = process.argv.slice(2);
console.log(beepTime);

const timer = function() {
  for (let val of beepTime) {
    time = val * 1000;
    setTimeout(() => {
        console.log(val);
        process.stdout.write('.');
        // process.stderr.write('\x07');
    }, time);
  }
};

timer(beepTime);
