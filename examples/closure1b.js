function a(counter) {
  b(() => {
    counter++;
  });
}

function b(fn) {
  fn();
}

a(7);
