const randomInteger = (min, max) => Math.round(Math.random() * (max - min) + min);

export const generateLocations = (n = 10, min = -10, max = 10) => {
  let locations = [];
  for(let i=0; i<n; i++){
    locations.push({
      x: randomInteger(min, max),
      y: randomInteger(min, max),
      z: randomInteger(min, max)
    })
  }
  return locations;
};