let grades = [91, 66, 77, 84, 66];
let search = 89;

function searchGrade(grades, search){
    for (var i = 0; i < grades.length ; i++){
    if (grades[i] == search){
        console.log(`The grade ${search} exists`);
        break;
    }
    else {
        console.log(`There is no such grade`)
    }
}
}


searchGrade(grades,search);

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  console.log(person1.fullName.call(person2));