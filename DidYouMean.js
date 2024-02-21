function Dictionary(words) {
    this.words = words;
  }

// @args:
//// term: Искомое слово. {string}
// @return {string} наиболее похожее слово.
Dictionary.prototype.findMostSimilar = function(term) {
    // Начальное значение минимального количества изменений
    let minChanges = Infinity; 
    // Начальное значение наиболее похожего слова
    let mostSimilar = null; 
    
    // Проходимся по каждому слову из списка известных слов
    for (let word of this.words) {
        let changes = this.calculateChanges(term, word); // Вычисляем количество изменений для текущего слова
        if (changes < minChanges) { // Если количество изменений меньше, чем текущее минимальное
            minChanges = changes; // Обновляем минимальное количество изменений
            mostSimilar = word; // Обновляем наиболее похожее слово
        }
    }
    console.log(mostSimilar)
    return mostSimilar; // Возвращаем наиболее похожее слово
}
  
// @args:
//// word1: Искомое слово. {string}
//// word2: Сравниваемое слово. {string}
// @return {string} наиболее похожее слово.
Dictionary.prototype.calculateChanges = function(word1, word2) {
    // Создаем матрицу размером (m+1) x (n+1) для хранения расстояния редактирования
    const matrix = [];
    for (let i = 0; i <= word1.length; i++) {
        matrix.push([]);
        for (let j = 0; j <= word2.length; j++) {
            if (i === 0) {
                matrix[i][j] = j; // Инициализация для случая, когда первое слово пустое
            } else if (j === 0) {
                matrix[i][j] = i; // Инициализация для случая, когда второе слово пустое
            } else if (word1[i - 1] === word2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1]; // Если символы совпадают, берем значение из диагональной ячейки
            } else {
                matrix[i][j] = 1 + Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]); // В противном случае выбираем минимум из соседних ячеек и добавляем 1
            }
        }
    }
    
    return matrix[word1.length][word2.length]; // Возвращаем количество изменений между двумя словами
}


fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
fruits.findMostSimilar('strawbery'); // must return "strawberry"
fruits.findMostSimilar('berry'); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
things.findMostSimilar('coddwars'); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven'); // must return "java"
languages.findMostSimilar('javascript'); // must return "javascript" (identical words are obviously the most similar)

