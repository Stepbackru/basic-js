const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let num = Number(sampleActivity);
  if(Number.isNaN(num) || (typeof sampleActivity !== 'string') || (num <= 0 || num > 15) ){
    return false
  } else {
    let n = Number(sampleActivity);
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.ceil((Math.log(MODERN_ACTIVITY / n)) / k);
    return t;
  }
};

//для теста в консоли браузера
// let n = Number(x);
// let k = 0.693 / 5730;
// let t = Math.ceil((Math.log(15 / n)) / k);