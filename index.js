const directionTypes ={
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  top: 'top',
}
//@args:
//size: number
//Создание матрицы
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
//@args:
//position: string (value directionTypes)
//Смена хода.
function changePosition(position){
  if(!position) throw new Error('dont have position')
  const positions = Object.values(directionTypes)
  const currentIndexPosition = positions.indexOf(position)
  if(currentIndexPosition === positions.length - 1) return positions[0]
  return positions[currentIndexPosition + 1]
}
// @args:
// currentPosition: Текущая позиция [Текущая строка, Текущий столбец]
// currnetMatrix: Двумерный массив(спираль)
// проверка позиции на 
function checkPosition(currentPosition, currnetMatrix){
  // обработка ошибок
  if(!currentPosition || !currnetMatrix) throw new Error('dont have params')
  if(currentPosition.length !== 2) throw new Error('wrong position')
  const rows = currnetMatrix.length;
  let maxLenCols = 0
  currnetMatrix.forEach(row => {
    maxLenCols = row.length
  });
  if (rows !== maxLenCols) {
    throw new Error('wrong matrix')
  }
  

  console.log()
  //Условия когда нет хода.
  if((currnetMatrix[currentPosition[0] + 2][currentPosition[1]] === 1) && 
  (currnetMatrix[currentPosition[0] - 2][currentPosition[1]] === 1) && 
  (currnetMatrix[currentPosition[0]][currentPosition[1] + 2] === 1) && 
  (currnetMatrix[currentPosition[0]][currentPosition[1]- 2] === 1)){
    return true
  }
  
  return false
}
// @args:
// size: Размер матрицы
function spiralize (size) {
  if(!size) throw new Error('incorrect size')

  let direction = directionTypes.right;   //Текущее движение
  let currentPosition = [ 2, 1 ] // Текущая позиция [Текущая строка, Текущий столбец]
  let isBadPosition = false
  const spiralMatrix = createSpiralMatrix(size)
  // while(!isBadPosition){
    
    
    if(direction === directionTypes.right){
      if(spiralMatrix[currentPosition[0]][currentPosition[1]+2] === 1){
        direction = changePosition(direction)
      }

      spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
      currentPosition = [currentPosition[0], currentPosition[1]+1]
    }
    if(direction === directionTypes.right){
      if(spiralMatrix[currentPosition[0]][currentPosition[1]+2] === 1){
        direction = changePosition(direction)
      }

      spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
      currentPosition = [currentPosition[0], currentPosition[1]+1]
    }

    if(direction === directionTypes.right){
      if(spiralMatrix[currentPosition[0]][currentPosition[1]+2] === 1){
        direction = changePosition(direction)
      }

      spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
      currentPosition = [currentPosition[0], currentPosition[1]+1]
    }

    if(direction === directionTypes.right){
      if(spiralMatrix[currentPosition[0]][currentPosition[1]+2] === 1){
        direction = changePosition(direction)
      }

      spiralMatrix[currentPosition[0]][currentPosition[1]] = 1
      currentPosition = [currentPosition[0], currentPosition[1]+1]
    }


    //check position
    isBadPosition = checkPosition(currentPosition, spiralMatrix)
    console.log('isBadPosition', isBadPosition)
  // }

  return spiralMatrix
}

const resultMatrix = spiralize(6);
for (let i = 0; i < resultMatrix.length; i++) {
    console.log(resultMatrix[i]);
}
