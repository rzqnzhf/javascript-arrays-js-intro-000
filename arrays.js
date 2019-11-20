var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (array, element) => {
  var tambahAwal = [element, ...array];// non-mutating
  return tambahAwal;
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  var y = array.unshift(element);// mutate
  return array;
};

function addElementToEndOfArray(array, element) {
  var tambahBel = [...array, element];// non-mutating
  return tambahBel;
};

function destructivelyAddElementToEndOfArray(array, element) {
  var x = array.push(element);// mutate
  return array;
};

////////////////////////////////////////////

function accessElementInArray(array, index) {
  return array[index];
};

////////////////////////////////////////////

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var c = array.shift();// mutate
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);// non-mutating
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();// mutate
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);// non-mutating
}
