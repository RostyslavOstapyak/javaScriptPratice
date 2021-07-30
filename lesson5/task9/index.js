function getPrimes(number) {
  nextPrime: for (let i = 2; i <= number; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
}
getPrimes(50);
