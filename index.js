//Declare an empty array using JS literal notation to store student names in future.
let StudentNames = [];
console.log(StudentNames);


//Declare and initialize a string array.
let StringArray = ["Apple", "Banana", "mango"];
console.log(StringArray);


//Declare and initialize a numbers array.
let NumbersArray = [1, 2, 3, 4];
console.log(NumbersArray);


//Declare and initialize a boolean array.
let booleanArray = [true, false, true, false];
console.log(booleanArray);


//Declare and initialize a mixed array.
let mixedArray = ["apple", 42, true, {name: "John"}, null];
console.log(mixedArray);




//Declare and Initialize an array and store availableeducation qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listedqualifications in your browser like:
// Declare and initialize the array of qualifications
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    
// Get the <ul> element by its ID
let qualificationsList = document.getElementById("qualificationsList");

// Loop through the qualifications array and create list items dynamically
qualifications.forEach(function(qualification) {
  // Create a new list item
  let listItem = document.createElement("li");
  // Set the text content of the list item to the current qualification
  listItem.textContent = qualification;
  // Append the list item to the <ul> element
  qualificationsList.appendChild(listItem);
});




//Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each students,display the scores & percentages of students like:
//Score of Michael is 320. Percentage:64%
//Score of John is 320. Percentage:46%
//Score of Tony is 480. Percentage:96% 
// Array to store student names
let studentNames = ["Michael", "John", "Tony"];

// Array to store scores of students
let studentScores = [320, 320, 480];

// Assuming total marks for each student is 500
let totalMarks = 500;

// Calculate and display scores and percentages
for (let i = 0; i < studentNames.length; i++) {
    let score = studentScores[i];
    let percentage = (score / totalMarks) * 100;
    console.log(`Score of ${studentNames[i]} is ${score}. Percentage: ${percentage}%`);
}




//table of 5
console.log("Table of 5");
for (let i = 5; i < 51; i = i + 5) {
    console.log(i);
}
