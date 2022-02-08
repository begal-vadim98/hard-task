'use strict'
const timer = function () {
  const boxA = document.querySelector('.box-fomat-a');
  const boxB = document.querySelector('.box-fomat-b');
    
  const funcData = () => {
    const date = new Date(),
      year = date.getFullYear(),
      monthNumeric = date.toLocaleString('ru', {
        month: 'numeric'
      }),
      month = date.toLocaleString('ru', {
        month: 'long'
      }),
      dateDayA = date.getDate(),
      dateDayB = date.getDate(),
      day = date.toLocaleString('ru', {
        weekday: 'long'
      }),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

    return {
      'year': year,
      'month': month,
      'monthNumeric': +monthNumeric,
      'dateDayA': dateDayA,
      'dateDayB': dateDayB,
      'day': day,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

 

  const changeDate = function () {

    const t = funcData();
    t.month = t.month.slice(0, t.month.length - 1) + "я"
    let stringHours = "часов";
    let stringMinutes = "минут";
    let stringSeconds = "секунд";
    const funcDeclination = function() {

      switch(true) {
        case t.hours === 1 || t.hours === 21:
          stringHours = "час";
          break;
        case 5 > t.hours && t.hours > 1 || 23 >= t.hours && t.hours > 21:
          stringHours = "часа";
          break;
        default: 
          stringHours = "часов";
      }

      switch(true) {
        case t.minutes === 1 || t.minutes === 21 || t.minutes === 31 || t.minutes === 41 || t.minutes === 51:
          stringMinutes = "минута";
          break;
        case t.minutes > 1 && t.minutes <= 4 || t.minutes > 21 && t.minutes <= 24 
          || t.minutes > 31 && t.minutes <= 34 || t.minutes > 41 && t.minutes <= 44 
          || t.minutes > 51 && t.minutes <= 54:
          stringMinutes = "минуты";
          break;
      }
      
      switch(true) {
        case t.seconds === 1 || t.seconds === 21 || t.seconds === 31 || t.seconds === 41 || t.seconds === 51:
          stringSeconds = "секунда";
          break;
        case t.seconds > 1 && t.seconds <= 4 || t.seconds > 21 && t.seconds <= 24 
          || t.seconds > 31 && t.seconds <= 34 || t.seconds > 41 && t.seconds <= 44 
          || t.seconds > 51 && t.seconds <= 54:
          stringSeconds = "секунды";
          break;
      }
      switch(true) {
        case t.hours < 10:
          t.hours = "0" + t.hours;
          break;
        case t.month < 10:
          t.month = "0" + t.month;
          break;
        case t.seconds < 10:
          t.seconds = "0" + t.seconds;
          break;
      }
      if(t.dateDayB < 10) t.dateDayB = "0" + t.dateDayB;
      if(t.monthNumeric < 10) t.monthNumeric = "0" + t.monthNumeric;
    
    }
    funcDeclination();

    boxA.textContent = `Сегодня ${t.day},  ${t.dateDayA} ${t.month} ${t.year} года, ${t.hours} ${stringHours} ${t.minutes}  ${stringMinutes} ${t.seconds} ${stringSeconds}`;
    boxB.textContent = `${t.hours}:${t.minutes}:${t.seconds} ${t.dateDayB}.${t.monthNumeric}.${t.year}`;
    
    let timerId = setInterval(changeDate, 1000);
    
  }
  changeDate();

}
timer();