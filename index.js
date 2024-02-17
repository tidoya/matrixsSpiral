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
const directionTypes ={
    left: 'left',
    right: 'right',
    top: 'top',
    bottom: 'bottom'
  }

function spiralize (size) {
  let top = 0;   //Верняя граница
  let bottom = size - 1;   //Нижняя
  let left = 0;   //Левая
  let right = size - 1;   //Правя
  let direction = directionTypes.right;   //Движение
  let currentRow = 3;   //Текущая строка
  let currentCol = 1;   //Текущий столбец
  
  const spiralMatrix = createSpiralMatrix(size) //Создание спирали
  
  for(let i = 0; i<spiralMatrix.length; i++){

      console.log(spiralMatrix[i])
  }
  
}

spiralize(5)