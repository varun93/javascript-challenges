const compareArrays = (arrayA, arrayB) => {
  let isEqual = true;

  if (arrayA == null && arrayB === null) {
    return true;
  }

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var index = 0; index < arrayA.length; index++) {
    const elementA = arrayA[index];
    const elementB = arrayB[index];

    if (typeof elementA !== typeof elementB) {
      isEqual = false;
      break;
    }

    if (Array.isArray(elementA)) {
      isEqual &= compareArrays(elementA, elementB);
    } else if (typeof elementA === "object") {
      isEqual &= compareObjects(elementA, elementB);
    } else {
      isEqual &= elementA === elementB;
    }

    if (!isEqual) {
      break;
    }
  }

  return isEqual;
};

// yes JSON.stringify(objA) === JSON.stringify(objB) works for shallow comapare, but doesn't work for deep compare!
const compareObjects = (objA, objB) => {
  if (objA === null && objB === null) {
    return true;
  }
  const objAKeys = Object.keys(objA);
  const objBKeys = Object.keys(objB);

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  return objAKeys.reduce((isEqual, keyA) => {
    const elemA = objA[keyA];
    const elemB = objB[keyA];
    isEqual &= typeof elemA === typeof elemA;

    if (Array.isArray(elemA)) {
      isEqual &= compareArrays(elemA, elemB);
    } else if (typeof elemA === "object") {
      isEqual &= compareObjects(elemA, elemB);
    } else {
      isEqual &= elemA === elemB;
    }

    return isEqual;
  }, true);
};
