function getTriangleArea(a, h) {
	if ( a <= 0 || h <= 0) {
		console.log("Nieprawidłowe dane")
	} else if ( a > 0 && h > 0) {
		return a*h/2
	}
}

console.log( getTriangleArea(10,6) )