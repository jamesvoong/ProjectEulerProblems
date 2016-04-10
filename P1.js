//Problem #1
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;

for (var i = 3; i < 1000; i+=3) {
	sum += i;
}

for (var h = 5; h < 1000; h+=5) {
	if((h%3) != 0){
		sum += h;
	}
}

console.log(sum);