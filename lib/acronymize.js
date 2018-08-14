const acronymizeSentence = (sentence) => {
  const words = sentence.split(' ');
  const firstLetters = words.map(word => word[0].toUpperCase());
  return firstLetters.join('');
}
