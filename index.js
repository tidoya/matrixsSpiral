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
// position: string (value directionTypes)
// currentMatrix: Двумерный массив(спираль)
// Смена хода.
function changePosition(position,currentPosition, currentMatrix){
  if(!position) throw new Error('dont have position')
  if(checkPosition(currentPosition, currentMatrix))return false
  const positions = Object.values(directionTypes)
  const currentIndexPosition = positions.indexOf(position)
  if(currentIndexPosition === positions.length - 1) return positions[0]
  return positions[currentIndexPosition + 1]
}
// @args:
// currentPosition: Текущая позиция [Текущая строка, Текущий столбец]
// currentMatrix: Двумерный массив(спираль)
// проверка позиции 
function checkPosition(currentPosition, currentMatrix){
  // обработка ошибок
  if(!currentPosition || !currentMatrix) throw new Error('dont have params')

  if(currentPosition.length !== 2) throw new Error('wrong position')
  const rows = currentMatrix.length;
  let maxLenCols = 0
  currentMatrix.forEach(row => {
    maxLenCols = row.length
  });
  if (rows !== maxLenCols) {
    throw new Error('wrong matrix')
  }
  

  // console.log(currentMatrix[currentPosition[0] + 1][currentPosition[1]])
  // //Условия когда нет хода.
  // if((currentMatrix[currentPosition[0] + 2][currentPosition[1]] === 1) && 
  // (currentMatrix[currentPosition[0] - 2][currentPosition[1]] === 1) && 
  // (currentMatrix[currentPosition[0]][currentPosition[1] + 2] === 1) && 
  // (currentMatrix[currentPosition[0]][currentPosition[1]- 2] === 1)){
  //   return true
  // }
  
  return false
}
// @args:
// size: Размер матрицы
function spiralize (size) {
  if(!size) throw new Error('incorrect size')

  let direction = directionTypes.right;   //Текущее движение
  let currentPosition = [ 2, 1 ] // Текущая позиция [Текущая строка, Текущий столбец]
  const spiralMatrix = createSpiralMatrix(size)
    while(direction){
      if(direction === directionTypes.right){
        if(spiralMatrix[currentPosition[0]][currentPosition[1]+1] === 1){
          direction = changePosition(direction, currentPosition, spiralMatrix)
          currentPosition = [currentPosition[0]+1, currentPosition[1]-1]
        }else{
          spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
          currentPosition = [currentPosition[0], currentPosition[1]+1]
        }
      }
      if(direction === directionTypes.bottom){
        if(spiralMatrix[currentPosition[0]+1][currentPosition[1]] === 1){
          direction = changePosition(direction,currentPosition,  spiralMatrix)
          currentPosition = [currentPosition[0]-1, currentPosition[1]]
        }else{
          spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
          currentPosition = [currentPosition[0]+1, currentPosition[1]]
        }
      }
      if(direction === directionTypes.left){
        if(spiralMatrix[currentPosition[0]][currentPosition[1]-1] === 1){
          direction = changePosition(direction, currentPosition,  spiralMatrix)
          currentPosition = [currentPosition[0], currentPosition[1]+1]
        }else{
          spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
          currentPosition = [currentPosition[0], currentPosition[1]-1]
        }
      }
      if(direction === directionTypes.top){
        if(spiralMatrix[currentPosition[0]-1][currentPosition[1]] === 1){
          direction = changePosition(direction,currentPosition, spiralMatrix)
          currentPosition = [currentPosition[0]+1, currentPosition[1]]
        }else{
          spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
          currentPosition = [currentPosition[0]-1, currentPosition[1]]
        }
      }
  }
 
  return spiralMatrix
}

const resultMatrix = spiralize(9);
console.log(JSON.stringify(resultMatrix).replace(/],/g, '],\n').slice(1, -1));
