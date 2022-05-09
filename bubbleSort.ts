// Bubble sort
const sort = (list: number[]): number[] => {
  const listLenght = list.length - 1;
  let comparitions = 0;
  for(let i = 0; i < listLenght; i++) {
    for(let j = 0; j < listLenght - i; j++) {
      comparitions++;
      if(list[j] > list[j + 1]) {
        const aux = list[j];
        list[j] = list[j+1];
        list[j+1] = aux;
      }
    }
  }
  return list;
}

const list = [4, 2, 7, 1, 3];
console.log(sort(list));