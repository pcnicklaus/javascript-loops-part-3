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
});

  //1. print student age - WORKING
  function secondLoop(arr) {
    arr.forEach(function(student) {
      console.log(student.age);
      });
    }

  secondLoop(students);

  //Print student name plus city
  function thirdLoop(arr) {
    arr.forEach(function(student) {
      console.log(student.name + ", " + student.city);
      });
    }

  thirdLoop(students);

  //Print students from Boulder with name in this format
  // Derek is from Boulder
  // Carl is from Boulder
  // Peter is from Boulder
  function fourthLoop(arr) {
    arr.forEach(function(student) {
      if (student.city === "Boulder") {
        console.log(student.name + " is from " + student.city);
      }
    });
  }


  fourthLoop(students);

  //     return (student.city === "Boulder");
  //   }).map(function(student) {
  //     return student.name;
  //   });


  //Print students older then 25 in this format
  // Liz is older than 25
  // Carl is older than 25

  function fifthLoop(arr) {
    arr.forEach(function(student) {
      if (student.age > 25) {
        console.log(student.name + " is older than 25");
      }
    });
  }

  fifthLoop(students);
