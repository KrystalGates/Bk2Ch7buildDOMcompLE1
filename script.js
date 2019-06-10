// Create an index.html file with a section element with an ID of 'family':
// Loop over this array of objects and insert the names of the family members
//  into `<h3>` tags, and append them to the DOM.

let family = [
    {
      name: "Fred Jones",
      age: 49,
      title: "parent"
    },
    {
      name: "Pat Jones",
      age: 50,
      title: "parent"
    },
    {
      name: "Bubba Jones",
      age: 20,
      title: "adult child"
    },
    {
      name: "Kelly Jones",
      age: 12,
      title: "dependent child"
    },
    {
      name: "Bartleby",
      age: 3,
      title: "pet"
    }
  ]

//   for loop example
  let familyNames = function(person) {
      for (i = 0; i < family.length; i++) {
          document.querySelector("#family").innerHTML += `<h3>${person[i].name}</h3>`
      }
  }

  familyNames(family);


// //  forEach example
//   family.forEach(function(person) {
//       document.querySelector("#family").innerHTML += `<h3>${person.name}</h3>`
//   })