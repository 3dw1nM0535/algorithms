var votes = ['NASA',
  'Jubilee',
  'Jubilee',
  'NASA',
  'NASA',
  'NASA',
  'Jubilee',
  'NASA',
  'NASA',
  'Jubilee',
  'NASA'];

var occurence = {};

for (var i = 0; i < votes.length; i++) {
  if (typeof occurence[votes[i]] == 'undefined') {
    occurence[votes[i]] = 1;
  } else {
    occurence[votes[i]]++;
  }
}

for (var key in occurence) {
  if(occurence.hasOwnProperty(key)) {
    console.log(key + ':' + occurence[key]);
  }
}