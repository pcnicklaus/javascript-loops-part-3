// add scripts

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

$(document).on('ready', function() {
  console.log('sanity check!');


  function firstLoop(arr) {
    arr.forEach(function(student) {
      console.log(student.name);
    });
  }

  firstLoop(students);

  function secondLoop(arr) {
    arr.forEach(function(student) {
      console.log(student.age);
      });
    }

  secondLoop(students);


  function thirdLoop(arr) {
    arr.forEach(function(student) {
      console.log(student.name + ", " + student.city);
      });
    }

  thirdLoop(students);

  function fourthLoop(arr) {
    var peopleFromBoulder = students.filter(function(student) {
      return (student.city === "Boulder");
    }).map(function(student) {
      return student.name;
    });
  }

  fourthLoop(students);

});

var numbers = [1, 2, 3, 4];

var newNumbers = numbers.filter(function(number){
    return (number % 2 != 0);
}).map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 6]
