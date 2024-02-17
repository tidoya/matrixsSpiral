//Types of direction
const directionTypes ={
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  top: 'top',
}
// @args:
//// size: number
//// Создание матрицы
// @return: {[[array][array]] NxN}. Создание матрицы.
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
//// direction: string (value directionTypes)
//// currentMatrix: Двумерный массив(спираль)
//// Смена хода.
// @return: {string: values directionTypes}. 
function changeDirection(direction){
  if(!direction) throw new Error('dont have position')
  const positions = Object.values(directionTypes)
  const currentIndexPosition = positions.indexOf(direction)
  if(currentIndexPosition === positions.length - 1) return positions[0]
  return positions[currentIndexPosition + 1]
}
// @args:
//// direction: Текущее движение
//// currentPosition: Текущая позиция [Текущая строка, Текущий столбец]
//// currentMatrix: Двумерный массив(спираль)
// @return: {boolean}. Проверка можно ли идти дальше
// проверка позиции 
function checkPosition(direction, currentPosition, currentMatrix){
  // обработка ошибок
  if(!currentPosition || !currentMatrix || !direction) throw new Error('dont have params')
  if(currentPosition.length !== 2) throw new Error('wrong position')
  const rows = currentMatrix.length;
  let maxLenCols = 0
  currentMatrix.forEach(row => {
    maxLenCols = row.length
  });
  if (rows !== maxLenCols) {
    throw new Error('wrong matrix')
  }
  // Проверка переднего по направлению элемента
  switch (direction) {
    case directionTypes.right:
      return (
        currentMatrix[currentPosition[0]][currentPosition[1] + 1] === 0 &&
        currentMatrix[currentPosition[0]][currentPosition[1] + 2] !== 1 &&
        currentMatrix[currentPosition[0] + 1]?.[currentPosition[1] + 1] === 0
      );
    case directionTypes.bottom:
      return (
        currentMatrix[currentPosition[0] + 1]?.[currentPosition[1]] === 0 &&
        currentMatrix[currentPosition[0] + 2]?.[currentPosition[1]] !== 1 &&
        currentMatrix[currentPosition[0] + 1]?.[currentPosition[1] - 1] === 0
      );
    case directionTypes.left:
      return (
        currentMatrix[currentPosition[0]][currentPosition[1] - 1] === 0 &&
        currentMatrix[currentPosition[0]][currentPosition[1] - 2] !== 1 &&
        currentMatrix[currentPosition[0] - 1]?.[currentPosition[1] - 1] === 0
      );
    case directionTypes.top:
      return (
        currentMatrix[currentPosition[0] - 1]?.[currentPosition[1]] === 0 &&
        currentMatrix[currentPosition[0] - 2]?.[currentPosition[1]] !== 1 &&
        currentMatrix[currentPosition[0] - 1]?.[currentPosition[1] + 1] === 0
      );
  }
}
// @args:
//// direction: Текущее движение
//// currentPosition: Текущая позиция [Текущая строка, Текущий столбец]
// @return update currentPosition [Текущая строка, Текущий столбец]
function changeCurrentPosition(direction, currentPosition){
  switch (direction) {
    case directionTypes.right:
      return [currentPosition[0], currentPosition[1]+=1];
    case directionTypes.bottom:
      return [currentPosition[0]+=1, currentPosition[1]]
    case directionTypes.left:
      return [currentPosition[0], currentPosition[1]-=1]
    case directionTypes.top:
      return [currentPosition[0]-=1, currentPosition[1]]
  }
}
// @args:
//// size: Размер матрицы
// @return finished spiralMatrix
function spiralize (size) {
  if(!size) throw new Error('incorrect size')
  let direction = directionTypes.right;   //Текущее движение
  let currentPosition = [ 2, 1 ] // Текущая позиция [Текущая строка, Текущий столбец]
  const spiralMatrix = createSpiralMatrix(size)

  while(true){
    spiralMatrix[currentPosition[0]][currentPosition[1]] = 1;

    if(checkPosition(direction, currentPosition,spiralMatrix)){
      currentPosition = changeCurrentPosition(direction, currentPosition)  
    }else{
      direction = changeDirection(direction);
      if(!checkPosition(direction, currentPosition,spiralMatrix)) break;
    }
  }
  
  return spiralMatrix
}


for(let i = 3; i<20; i+=1){
  console.log(i, '``````````````````````````````')
  console.log(JSON.stringify(spiralize(i)).replace(/],/g, '],\n').slice(1, -1));
}

