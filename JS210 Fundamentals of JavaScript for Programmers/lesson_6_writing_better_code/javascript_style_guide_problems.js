// PROBLEM 1
let title = 'The Three-Body Problem';

// PROBLEM 2
let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;

// PROBLEM 3
let completed = lastPageRead === 400;

// PROBLEM 4
if (finishedBook()) {
  console.log('You have finished reading this book');
}

// PROBLEM 5
let read = function(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
};

read(400);
