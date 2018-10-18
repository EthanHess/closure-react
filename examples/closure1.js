function a() {
  let counter = 0;
  b(() => {
    counter++;
  });
}

function b(fn) {
  fn();
}

a();
