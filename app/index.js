let string = 'supercalifragilisticexpialidocious';

const countLetter = (word, orig_letter) => {
  // TODO Create a map called 'letters'
  let letters = new Map();
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      letters.set(letter, 1);
    } else {
      letters.set(letter, letters.get(letter) + 1);
    }
  }
  return letters.get(orig_letter);
};

let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');
console.log(a_count, x_count);
