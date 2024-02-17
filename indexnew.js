const directionTypes ={
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  top: 'top',
}
// @args:
// size: number
// Создание матрицы
function createSpiralMatrix(size){
    const spiralMatrix = Array.from({ length: size }, () => Array(size).fill(0))
    for(let i = 0; i<spiralMatrix.length; i++){
          if(i===0) {
              spiralMatrix[i].fill(1)
              continue;
          }
          if(i===spiralMatrix.length-1)  {
              spiralMatrix[i].fill(1)
              continue;
          }
          spiralMatrix[i][size-1] = 1
          if(i!==1) spiralMatrix[i][0] = 1
    }
    return spiralMatrix
}
// @args:
// size: Размер матрицы
function spiralize (size) {
  if(!size) throw new Error('incorrect size')

  let direction = directionTypes.right;   //Текущее движение
  let currentPosition = [ 2, 1 ] // Текущая позиция [Текущая строка, Текущий столбец]
  const spiralMatrix = createSpiralMatrix(size)

  return spiralMatrix
}

const resultMatrix = spiralize(9);
console.log(JSON.stringify(resultMatrix).replace(/],/g, '],\n').slice(1, -1));
