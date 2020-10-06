// 1. Mengubah fungsi menjadi fungsi arrow
console.log('1. Mengubah fungsi menjadi fungsi arrow'); // title soal
const golden = goldenFunction = () => {
  console.log("this is golden!!")
}
 
golden();
console.log(''); // spasi antar soal

// 2. Sederhanakan menjadi Object literal di ES6
console.log('2. Sederhanakan menjadi Object literal di ES6'); // title soal
const newFunction = function literal(firstName, lastName){
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName();
console.log(''); // spasi antar soal

// 3. Destructuring
console.log('3. Destructuring'); // title soal
let newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation, spell);
console.log(''); // spasi antar soal

// 4. Array Spreading
console.log('4. Array Spreading'); // title soal
let west = ["Will", "Chris", "Sam", "Holly"];
let east = ["Gill", "Brian", "Noel", "Maggie"];
let combined = [...west, ...east];

console.log(combined);
console.log(''); // spasi antar soal

// 5. Template Literals
console.log('5. Template Literals'); // title soal
const planet = 'earth ';
const view = 'glass ';
const lorem = 'lorem ';
const dolar = 'dolor sit amet, consectetur adipiscing elit, ';
const tempor = 'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ';
const before = `${lorem}${view}${dolar}${planet}${tempor}`;
 
console.log(`${before}`);