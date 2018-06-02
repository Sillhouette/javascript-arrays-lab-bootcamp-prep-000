/** declared a var and set it equal to an array containing strings of various kiten names **/
var kittens = ['Milo', 'Otis', 'Garfield'];

/**
 * destructivelyAppendKitten takes in one argument, name, and adds that name to the end of the kittens array
 **/
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

/**
 * destructivelyPrependKitten takes in one argument, name, and adds that to the end of the kittens array
 **/
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

/**
 * destructivelyRemoveLastKitten removes the last name from the kittens array
 **/
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

/**
 * destructivelyRemoveFirstKitten removes the first kitten from the kitten array
 **/
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

/**
 * appendkitten takes in one argument, name, and returns a new array with the new name added to the end of the kittens array
 **/
function appendKitten(name){
  return [...kittens, name];
}

/**
 * prependKitten takes in one argument, name, and returns a new array with the new name added to the beginning of the kittens array
 **/
function prependKitten(name){
  return [name, ...kittens];
}

/**
 * removeLastKitten returns a new array with the last kitten removed from the kitten array
 **/
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}

/**
 * removeFirstKitten returns a new array with the first kitten removed from the kitten array
 **/
function removeFirstKitten(){
  return kittens.slice(1);
}
