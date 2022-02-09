'use strict'
const timer = function () {
  const boxA = document.querySelector('.box-fomat-a');
  const boxB = document.querySelector('.box-fomat-b');
  const week = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
 

  const funcData = () => {
    const date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth(),
      dateDay = date.getDate(),
      day = date.toLocaleString('ru', {
        weekday: 'long'
      }),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

    return {
      'year': year,
      'month': month,
      'dateDay': dateDay,
      'day': day,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };

  }

  const delicationFormB = function () {
    const FormatB = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
    return {
      'FormatB.time': FormatB.time,
      'FormatB.date': FormatB.date,
    }
  };

  const changeDate = function () {

    const t = funcData();
    const tFormB = delicationFormB();
    
    let todayMonth = " ";

    week.forEach((elem, index, arr) => {

      if (index === t.month) todayMonth = elem;

    });

    const declinationFunc = function declinationFunc(n, textForms) {

      n = Math.abs(n) % 100;
      let n1 = n % 10;
      if (n > 10 && n < 20) return textForms[2];
      if (n1 > 1 && n1 < 5) return textForms[1];
      if (n1 == 1) return textForms[0];
      return textForms[2];

    }


    const hoursForm = declinationFunc(t.hours, ['час', 'часа', 'часов']),
      minutesForm = declinationFunc(t.minutes, ['минута', 'минуты', 'минут']),
      secondForm = declinationFunc(t.seconds, ['секунда', 'секунды', 'секунд'])

    boxA.textContent = `Сегодня ${t.day},  ${t.dateDay} ${todayMonth} ${t.year} года, ${t.hours} ${hoursForm}  ${t.minutes} ${minutesForm}   ${t.seconds} ${secondForm}`;
    boxB.textContent = `${tFormB["FormatB.time"]} ${tFormB["FormatB.date"]}`;
    let timerId = setInterval(changeDate, 1000);

  }
  changeDate();

}
timer();