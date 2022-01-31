'use strict'

const lang = "RU",
  weekday = new Map([
    ["ru", ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
    ["en", ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]
  ]);

 
// Решение через многомерный массив
console.log(weekday.get(lang.toLowerCase()));

// Решение через if
if(lang.toLowerCase() === 'ru') {

  console.log(weekday.get(lang.toLowerCase()));

} else if (lang.toLowerCase() === 'en') {

  console.log(weekday.get(lang.toLowerCase()));

} else {
  console.log("Выбранного языка нет")
}

//  Решение через switch 
switch (lang.toLowerCase()) {

  case "ru":
   console.log(weekday.get(lang.toLowerCase()));
  break;

  case "en": 
    console.log(weekday.get(lang.toLowerCase()));
  break;

}

// Задание 2

const namePerson = "Вадим";

namePerson.toLowerCase() === "артем" ? console.log(`${namePerson} Дирректор`) : 
namePerson.toLowerCase() === "александр" ? console.log(`${namePerson} преподователь`) : 
console.log(`Человек по имени ${namePerson} студент`);