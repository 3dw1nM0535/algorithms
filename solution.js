function printHello (count) {
  if (count < 1) {
    return;
  }
  console.log('Hello, world!');
  printHello(count-1); //Recursive call to printHello()
}

printHello(10);

