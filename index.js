

function theBeatlesPlay(musicians, instruments) {
  const empty = [];
  for (let i = 0; i <= 3; i++) {
    empty.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return empty;
}

function johnLennonFacts(array) {
  const factsArray = [];
  let i = 0;
  while (i < array.length) {
    factsArray.push(array[i] + '!!!');
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  const aArray = [];
  do {
    aArray.push('I love the beatles!');
  } while (num < 15); {
    num++;
    aArray.push('I love the beatles!');
  }
  return aArray;
}

