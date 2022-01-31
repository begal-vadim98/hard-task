'use strict'

const lang = "ru",
  weekday = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']];
    

  lang.toLowerCase() === "ru"  ? console.log(weekday[0]) : 
  lang.toLowerCase() === "en" ? console.log(weekday[1]) :
  console.log("Выбранного языка нет в переводе");

// Задание 2

const namePerson = "Вадим";

namePerson.toLowerCase() === "артем" ? console.log(`${namePerson} Дирректор`) : 
namePerson.toLowerCase() === "александр" ? console.log(`${namePerson} преподователь`) : 
console.log(`Человек по имени ${namePerson} студент`);