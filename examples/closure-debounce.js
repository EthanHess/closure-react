const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function debounce(fn, time) {
  let id
  return function() {
    clearTimeout(id);
    id = setTimeout(() => fn.apply(this, arguments), time);
  }
}

const handleKeystroke = (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    console.log(`You pressed the "${str}" key`);
    console.log();
    console.log(key);
    console.log();
  }
}

const ignoreSomeKeystrokes = debounce(handleKeystroke, 500);
process.stdin.on('keypress', ignoreSomeKeystrokes);
console.log('Press any key...');