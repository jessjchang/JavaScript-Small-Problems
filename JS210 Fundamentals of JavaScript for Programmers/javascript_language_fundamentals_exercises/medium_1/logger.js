function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt(); // logs 'debugging', returns undefined
