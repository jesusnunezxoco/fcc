// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and it has to be a string. 
// These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    
    let _firstName = firstAndLast.split(" ")[0];
    let _lastName = firstAndLast.split(" ")[1];
  
    this.getFullName = function () {
      return `${_firstName} ${_lastName}`;
    };
  
    this.getFirstName = function () {
      return _firstName;
    };
  
    this.getLastName = function () {
      return _lastName;
    };
  
    this.setFullName = function(newFullName) {
      _firstName = newFullName.split(" ")[0]
      _lastName = newFullName.split(" ")[1]
    };
  
    this.setFirstName = function(newFirstName) {
      _firstName = newFirstName
    };
  
    this.setLastName = function(newLastName) {
      _lastName = newLastName
    };
  
    
    return firstAndLast;
  };
  
  var bob = new Person("Bob Ross");
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  bob.setFullName("Jesus Nunez")
  bob.setFirstName("Jesus")
  bob.setLastName("Nunez")
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  
  console.log(Object.keys(bob))
  
