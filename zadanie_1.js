const result = prompt('Введите число', '')
if (typeof +result !== 'number') {
  alert('Ошибка')
} if (isNaN(result % 2)) {
  alert('Упс, кажется, вы ошиблись')
} if (result % 2 === 0) {
  alert('Число четное')
} if (result % 1 === 0) {
  alert('Число нечетное')
} 