const myCar = {
  type: "Farmeri",
  color: "steel gray",
  maker: "VW",
  year: 2019,
};
const expected = {
  type: "Farmeri",
  color: "steel gray",
  maker: "VW",
  year: 2019,
  age: 3,
};

const transformCar = (input) => {
  let age = 2021 - input.year;
  console.log("age :" + age);
  input.age = age;
  let output = input;
  return output;
};
console.log(transformCar(myCar));

const transformBand = (input) => {
  input.all = [];
  input.plays = {
    vocals: [],
    synth: [],
    guitar: [],
    bass: [],
    drums: [],
  };
  return input;
};
console.log(transformBand());
