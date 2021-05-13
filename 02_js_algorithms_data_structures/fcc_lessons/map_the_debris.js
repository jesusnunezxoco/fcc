// Intermediate Algorithm Scripting: Map the Debris
// Return a new array
// Transform the elements' average altitude into their orbital periods (in seconds)
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let twoTimesPi = 2 * Math.PI;

  return arr.map((obj) => {
    let a = Math.pow(earthRadius + obj["avgAlt"], 3);

    obj.orbitalPeriod = Math.round(twoTimesPi * Math.sqrt(a / GM));

    delete obj["avgAlt"];
    console.log(obj);
    return obj;
  });
}

console.log("1");
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log("2");
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
