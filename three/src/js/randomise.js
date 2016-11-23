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

export const generateWalk = (n = 30) => {
  let walk = [10];
  for(let i=0; i< n-1; i++){
    Math.random() < 0.5 ? walk.push(walk[i] + 1) : walk.push(walk[i] - 1);
    if(walk[i+1] < 0) walk[i+1] = 0;
  }
  return walk;
};