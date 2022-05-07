// PROBLEM 1
function objectHasProperty(obj, str) {
  for (let o in obj) {
    if (o === str) {
      return true;
    }
  }
  
  return false;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true


// PROBLEM 2
function incrementProperty(obj, str) {
  let keys = Object.keys(obj);
  
  if (keys.indexOf(str) === -1) {
    obj[str] = 1;
  } else {
    obj[str] += 1;
  }
  
  return obj[str];
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }


// PROBLEM 3
function copyProperties(obj1, obj2) {
  for (let o in obj1) {
    obj2[o] = obj1[o];
  }
  
  return Object.keys(obj2).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }


// PROBLEM 4
function wordCount(str) {
  let words = str.split(' ');
  let result = {};
  
  for (let word in words) {
    let key = words[word];

    if (result[key]) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }
  
  return result;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
