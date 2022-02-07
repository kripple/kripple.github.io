function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function uniquenessFilter(value, index, self) {
  return self.indexOf(value) === index;
}

function onlyGoodWords(wordlist) {
  let goodWords = [];

  wordlist.forEach(word => {
    let goodWord = word.split('').filter(uniquenessFilter);
    if (goodWord.length === 5) {
      goodWords.push(goodWord.join(''));
    }
  })
  return goodWords;
}
