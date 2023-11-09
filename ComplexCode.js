// Filename: ComplexCode.js
// Description: This code implements a complex data structure with manipulation functions and a sorting algorithm.

// Define a class for a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Define a class for a social network
class SocialNetwork {
  constructor() {
    this.people = []; // Array to hold all the people
  }

  // Add a person to the network
  addPerson(person) {
    this.people.push(person);
  }

  // Get the average age of all people in the network
  averageAge() {
    let sum = 0;
    for (let person of this.people) {
      sum += person.age;
    }
    return sum / this.people.length;
  }
}

// Define a sorting algorithm - QuickSort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Create a social network instance
const network = new SocialNetwork();

// Add some people to the network
network.addPerson(new Person("Alice", 25));
network.addPerson(new Person("Bob", 32));
network.addPerson(new Person("Charlie", 19));
network.addPerson(new Person("David", 41));

// Display the average age of people in the network
console.log("Average Age:", network.averageAge());

// Generate an array of random numbers
const numbers = [5, 8, 2, 9, 1, 3, 7, 4, 6];

// Sort the array using QuickSort algorithm
const sortedNumbers = quickSort(numbers);
console.log("Sorted Numbers:", sortedNumbers);

// End of code