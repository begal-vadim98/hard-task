'use strict'

const lang = "RU",
  weekday = {
    ru : ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  };
    
  console.log(weekday[lang.toLowerCase()]);

//  Решение через switch 
/*
const weekdayRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
weekdayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

switch (lang.toLowerCase()) {

  case "ru":
    weekdayRu.forEach((elem, index, arr) => {
      console.log(arr[index])
    });
    break;

  case "en": 
    weekdayRu.forEach((elem, index, arr) => {
      console.log(arr[index])
    });
    break;

}
*/
// Задание 2

const namePerson = "Вадим";

namePerson.toLowerCase() === "артем" ? console.log(`${namePerson} Дирректор`) : 
namePerson.toLowerCase() === "александр" ? console.log(`${namePerson} преподователь`) : 
console.log(`Человек по имени ${namePerson} студент`);