//Problem #3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var isPrime = function (number) {
    for (var i = 2; i < number; i++) {
			if(number%i === 0) {
				return false;
			}
		}
	return true;
};

var findPrime = function (number) {
    var highestPrime;
    
	for (var i = 3; i <= number; i++) {
		if(isPrime(i) && ((number%i) === 0)) {
			highestPrime = i;
			number /= i;
		}
	}
    return highestPrime;
};

console.log(findPrime(600851475143));