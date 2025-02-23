 function calculateArea() {
    // Get the r from the user using the prompt() function
	 let pi = 3.14159265358979323846;
    let r = prompt("Enter the radius of the circle:");
    // write you code here and display the result to the user
    let ans=((pi*r*r).toFixed(2))
	 alert(`The area of the circle with radius ${r} is ${ans}`)
}
calculateArea();
