var a = 1
var b = 2
var value = (a*a) + (2 * a * b) - (b*b)
if (value > 0) {
	console.log("Wynik jest dodatni! I wynosi: " + value) 
} else if (value < 0) {
	console.log("Wynik jest ujemny! I wynosi: " + value)
} else if ( value == 0) {
	console.log("Wynik jest zerem " + value)
}

