const dateRender = () => {
 
const title = document.getElementById('title'),
  titleTime = document.getElementById('title-time'),
  titleNewYear = document.getElementById('title-newyear'),
  week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  date = new Date();

  const declinationFunc = function declinationFunc(n, textForms) {
    if (n > 5 && n < 12) return textForms[0];
    if (n >= 12 && n < 17) return textForms[1];
    if (n >= 17 && n < 20) return textForms[2];
    if (n >= 20 && n <= 23) return textForms[3];
    if (0 <= n && n <= 5) return textForms[3];
  }

  const declinationDayText = function declinationFunc(n, textForms) {

    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) return textForms[2];
    if (n1 > 1 && n1 < 5) return textForms[1];
    if (n1 == 1) return textForms[0];
    return textForms[2];

  }

  const returnDay = () => {
    const time = new Date().toLocaleTimeString();
    
    return {time}
  }

  const newYear = (deadline) => {
    
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timerRemaining = (dateStop - dateNow) / 1000;

    let days = Math.floor(timerRemaining / 60 / 60 / 24);

    return days

  }
  

  const renderTimer = () => {
    const t = returnDay();
    const newYearDeadLine = newYear(`31 december ${date.getFullYear()}`);
    const dayString = declinationDayText(newYearDeadLine, ['день', 'дня', 'дней']);
    const greeting = declinationFunc(date.getHours(), ['Доброе Утро', 'Добрый день', 'Добрый Вечер', 'Доброй ночи']);
  
    
    title.textContent = `${greeting},  сегодня ${week[date.getDay()] }`
    titleTime.textContent =  `Текущее время: ${t.time}`;
    titleNewYear.textContent =  `До нового года осталось ${newYearDeadLine} ${dayString}`;


  }

  
  setInterval(renderTimer, 1000);

  


}

export default dateRender