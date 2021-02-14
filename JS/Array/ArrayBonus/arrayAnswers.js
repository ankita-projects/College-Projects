const band = {
  members: {
    current: [
      { name: "Sascha", age: 59, plays: ["vocals", "synth", "guitar", "bass"] },
      { name: "Lucia", age: 49, plays: ["vocals", "synth"] },
      { name: "Jules", age: 53, plays: ["guitar", "bass", "synth"] },
      { name: "Steve", age: 55, plays: ["guitar"] },
    ],
    past: [
      { name: "Raymond", age: 57, plays: ["vocals", "synth"] },
      { name: "En", age: 52, plays: ["vocals", "drums", "guitar", "synth"] },
      { name: "Gunter", age: 57, plays: ["guitar", "synth"] },
    ],
  },
};

const transformBand = (input) => {
  let all = [];
  let vocals = [];
  let synth = [];
  let guitar = [];
  let bass = [];
  let drums = [];
  input.members.current.forEach((element) => {
    let lowerCaseName = element.name.toLowerCase();
    all.push(lowerCaseName);
    if (element.plays.includes("vocals")) {
      vocals.push(lowerCaseName);
    }
    if (element.plays.includes("synth")) {
      synth.push(lowerCaseName);
    }
    if (element.plays.includes("guitar")) {
      guitar.push(lowerCaseName);
    }
    if (element.plays.includes("bass")) {
      bass.push(lowerCaseName);
    }
    if (element.plays.includes("drums")) {
      drums.push(lowerCaseName);
    }
  });
  input.members.past.forEach((element) => {
    let lowerCaseName = element.name.toLowerCase();
    all.push(lowerCaseName);
    if (element.plays.includes("vocals")) {
      vocals.push(lowerCaseName);
    }
    if (element.plays.includes("synth")) {
      synth.push(lowerCaseName);
    }
    if (element.plays.includes("guitar")) {
      guitar.push(lowerCaseName);
    }
    if (element.plays.includes("bass")) {
      bass.push(lowerCaseName);
    }
    if (element.plays.includes("drums")) {
      drums.push(lowerCaseName);
    }
  });
  all.sort();
  input.members.all = all;
  input.plays = {};
  input.plays.vocals = vocals;
  input.plays.synth = synth;
  input.plays.guitar = guitar;
  input.plays.bass = bass;
  input.plays.drums = drums;

  return input;
};
console.table(transformBand(band).plays);

const expected = {
  members: {
    // current: no changes
    current: [
      { name: "Sascha", age: 59, plays: ["vocals", "synth", "guitar", "bass"] },
      { name: "Lucia", age: 49, plays: ["vocals", "synth"] },
      { name: "Jules", age: 53, plays: ["guitar", "bass", "synth"] },
      { name: "Steve", age: 55, plays: ["guitar"] },
    ],
    // past: no changes
    past: [
      { name: "Raymond", age: 57, plays: ["vocals", "synth"] },
      { name: "En", age: 52, plays: ["vocals", "drums", "guitar", "synth"] },
      { name: "Gunter", age: 57, plays: ["guitar", "synth"] },
    ],
    // ORDER MATTERS!
    // 1. Sort age first by DESC
    // 2. then sort name by ASC
    // 3. lowercase all the names
    all: ["sascha", "gunter", "raymond", "steve", "jules", "en", "lucia"],
  },
  // plays order doesn't matter
  plays: {
    // name order doesn't matter
    // but show the name in lowercase
    vocals: ["sascha", "lucia", "raymond", "en"],
    synth: ["sascha", "lucia", "jules", "raymond", "en", "gunter"],
    guitar: ["sascha", "jules", "steve", "en", "gunter"],
    bass: ["sascha", "jules"],
    drums: ["en"],
  },
};
