let day='Tuesday';
let day2='Monday';
setTimeout( () => {
    console.log('I happen sooner'+day2);
    setTimeout( () => {
      // deeper code
      console.log('I happen later'+day);
    }, 1000);
  }, 1000);