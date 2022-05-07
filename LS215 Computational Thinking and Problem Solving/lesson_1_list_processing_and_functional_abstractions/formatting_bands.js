let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  let bandName = band.name;
  band.name = performCapitalization(bandName);
}

function performCapitalization(bandName) {
  return bandName.split(' ').map(word => upperCaseFirstLetter(word)).join(' ');
}

function upperCaseFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function removeDotsInBandName(band) {
  let bandName = band.name;
  band.name = bandName.replace(/\./g, '');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
