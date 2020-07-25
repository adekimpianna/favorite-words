'use strict';
console.log('--- loading: search.js');

const searchHandler = () => {
  debugger;
  const userInput = prompt('enter a search query:');
  if ( userInput == null) {
    return;
  }

  const includesSubstring = (entry) => {
    let result = ''
    if (entry.includes(userInput)) {
      return entry;
    }
    else {
      return result;
    }
  };

  const foundWords = words.map(includesSubstring);

  displayHandler(`search result for ${userInput}`, foundWords);
};
