// Creating the prototype object
const Student = function(name) {
    this.name = name;
  }
  
  // Adding the method to the prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, the student is ${this.name}`);
  }
  
  // Creating an instance of the Student object and calling the printDetails method
  const student1 = new Student("Mithun");
  student1.printDetails(); // Output: "Hello, my name is Mithun"
  