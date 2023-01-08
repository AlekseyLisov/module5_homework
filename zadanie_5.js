// первый вариант

var arr = ["Москва", "Питер", "Рязань", "Надым", "Самара"];

console.log(arr.length);

arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + "" );
});


// второй вариант

var arr = ["Москва", "Питер", "Рязань", "Надым", "Самара"];

alert(arr.length);

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + "" );
});