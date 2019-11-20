var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (array, element) => {
  var tambahAwal = [element, ...array];
  return tambahAwal;
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  var y = array.unshift(element);
  return array;
};

function addElementToEndOfArray(array, element) {
  var tambahBel = [...array, element];
  return tambahBel;
};

function destructivelyAddElementToEndOfArray(array, element) {
  var x = array.push(element);
  return array;
};

function accessElementInArray(array, index) {
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var c = array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var x = array.slice(0, array.length - 1);
  return array;
}
