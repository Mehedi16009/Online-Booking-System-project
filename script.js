/*"use strict";
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);
*/

//checkIn

/*const flight = "LH236";
const mehedi = {
  name: " Mehedi Hasan",
  passport: 3030007234,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 3030007234) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, mehedi);
console.log(flight);
console.log(mehedi);

const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher Order Function:
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);
*/

/*

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("hey");

greetHey("Mehedi");
greetHey("Hasan");

greet("Hello")("Mehedi");

//Challenge

const greeetArt = (greeting) => (name) => console.log(`${greeting} ${name}`);

greeetArt("Hi")("Mehedi");
*/

/*

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}  flight ${this.iataCode} ${flightNum}`
    );

    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Mehedi Hasan");
lufthansa.book(240, "Anika Hasan");
console.log(lufthansa);
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;
//Does Not Work
//book(23, 'Sarah Williams');
//instead of this book function, we call funtion method 'call':

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  booking: [],
};

book.call(swiss, 583, "Mehedi Hasan");
//console.log(swiss);

//Apply Method:

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

//Same uswe for Modern JavaScript:

book.call(swiss, ...flightData);

//Bind method:

//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Khabib");
bookEW23("COOPer");

//With Event Listeners:

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;

  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application:Preset parameters.

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
//addVat= value=>value+value*rate;

console.log(addVat(100));
console.log(addVat(23));
//Same as bellow:
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0:JavaScript", "1:Python", "2:Rust", "3:C++"],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get Answer:
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join("\n")} \n(write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = " array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(",")}`);
    }
  },
};

//poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
*/
/* //Creating Closure:
const secureBooking = function () {
  passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);


*/

let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 3);
  };
};
g();
f();
