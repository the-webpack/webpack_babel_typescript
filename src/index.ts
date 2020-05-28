function component(): any {
  const element = document.createElement('div');

  const [word1, word2] = ['Hello', 'webpack'];

  element.innerHTML = `${word1}, ${word2}!`;

  return element;
}

document.body.appendChild(component());
