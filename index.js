function hello(name) {
  return `Hello, ${name}!`;
}

function shout(word) {
  return word.toUpperCase() + '!!!';
}

module.exports = { hello, shout };