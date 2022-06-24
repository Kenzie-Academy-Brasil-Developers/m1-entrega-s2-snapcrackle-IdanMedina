function snapCrackle(maxValue) {
  if (maxValue == 0) {
    return console.log("Digite um número maior que zero");
  }
  let output = [];
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 == 0 && i % 5 !== 0) {
      output.push(` ${i}`);
    } else if (i % 5 == 0 && i % 2 !== 0) {
      output.push(" SnapCrackle");
    } else if (i % 5 == 0) {
      output.push(" Crackle");
    } else if (i % 2 !== 0) {
      output.push(" Snap");
    } else {
      output.push(i);
    }
  }
  return output.toString();
}
console.log(snapCrackle(20));

// exercício bônus//
function snapCracklePrime(maxValue) {
  if (maxValue == 0) {
    return console.log("Digite um número maior que zero");
  }
  let output = [];

  for (let i = 1; i <= maxValue; i++) {
    let divisor = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        divisor += 1;
      }
    }

    if (divisor == 2 && i % 5 === 0 && i % 2 !== 0) {
      output.push("SnapCracklePrime");
    } else if (divisor == 2 && i % 2 !== 0) {
      output.push("SnapPrime");
    } else if (divisor == 2) {
      output.push("Prime");
    } else if (i % 5 === 0 && i % 2 !== 0) {
      output.push("SnapCrackle");
    } else if (i % 2 !== 0) {
      output.push("Snap");
    } else if (i % 5 === 0) {
      output.push("Crackle");
    } else {
      output.push(i);
    }
  }

  return output.join(", ");
}

console.log(snapCracklePrime(20));
