function createSpiralMatrix(size) {
  return Array.from({ length: size }, () =>
      Array.from({ length: size }, () =>
          (Math.floor(size + 1) / 2) % 2 === 1 ? 1 : 0
      )
  );
}
function spiralize (size){
  spiralMatrix = createSpiralMatrix(size)
  value = 1 
  for(let i = 0; i< size/2; i++){
    spiralMatrix[i].fill(0)
  }
  return spiralMatrix
}
// Пример использования

console.log(JSON.stringify(spiralize(5)).replace(/],/g, '],\n').slice(1, -1));
console.log('""""""""');

console.log(JSON.stringify(spiralize(6)).replace(/],/g, '],\n').slice(1, -1));
// console.log(JSON.stringify(createMatrix(7)).replace(/],/g, '],\n').slice(1, -1));
// console.log(JSON.stringify(createMatrix(8)).replace(/],/g, '],\n').slice(1, -1));