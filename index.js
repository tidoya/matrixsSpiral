const directionTypes ={
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  top: 'top',
}

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
function changePosition(position){
  if(!position) throw new Error('dont have position')
  const positions = Object.values(directionTypes)
  const currentIndexPosition = positions.indexOf(position)
  if(currentIndexPosition === positions.length - 1) return positions[0]
  return positions[currentIndexPosition + 1]
}


function spiralize (size) {
  let direction = directionTypes.right;   //Движение
  const currentPosition = [ 2, 1 ] // Текущая позиция [Текущая строка, Текущий столбец]
  // const breakCycle = true
  const spiralMatrix = createSpiralMatrix(size) //Создание спирали
  // while(breakCycle){
    if(direction === directionTypes.right){
      if(spiralMatrix[currentPosition[0]][currentPosition[1]+2] === 1){
        direction = changePosition(direction)
      }

      spiralMatrix[currentPosition[0]][currentPosition[1]] = 2
    }
  // }

  return spiralMatrix
}

const resultMatrix = spiralize(5);
for (let i = 0; i < resultMatrix.length; i++) {
    console.log(resultMatrix[i]);
}
