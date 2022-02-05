'use strict'

const str = document.querySelectorAll('h3'),
  box = document.querySelector('.box'),
  week  = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  date = new Date();

week.forEach((elem, index) => {
  str[index].textContent = elem;
  
})
box.style.cssText = ` height: 100vh;
                          display: flex;
                          flex-direction: column;
                          align-items: center;`;

str.forEach((elem, index) => {
  elem.style.fontWeight = "300"

    if(week[index] === "Суббота" || week[index] === "Воскресенье") {
      elem.style.fontStyle = "italic"
    } 
    if(index === (date.getDay() - 1) || index === (date.getDay() + 6))  {
      elem.style.fontWeight = "900"
      elem.textContent =  "Сегодня у нас" + " " + elem.textContent 
    }
})

console.log(date.getDay());