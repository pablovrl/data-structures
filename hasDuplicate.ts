const hasDuplicateCuadratic = (list: number[]): boolean => {
  for (let i = 0; i < list.length; i++) {
   for (let j = 0; j < list.length; j++) {
    if(i !== j && list[i] === list[j]) return true;
   } 
  }
  return false;
}

const hasDuplicateLinear = (list: number[]): boolean => {
  const existingNumbers: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if(existingNumbers[list[i]] === undefined) {
      existingNumbers[list[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

const list = [1, 2, 3, 4, 5];
console.log(hasDuplicateCuadratic(list));
console.log(hasDuplicateLinear(list));