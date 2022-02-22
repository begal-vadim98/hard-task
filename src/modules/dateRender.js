const dateRender = () => {
 
const title = document.querySelector('.title'),
  week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  date = new Date();

  const declinationFunc = function declinationFunc(n, textForms) {

    if (n > 5 && n < 12) return textForms[0];

    if (n >= 12 && n < 17) return textForms[1];

    if (n >= 17 && n < 20) return textForms[2];

    if (n >= 20 && n <= 23) return textForms[3];

    if (0 <= n && n <= 5) return textForms[3];

  }

  const greeting = declinationFunc(date.getHours(), ['Доброе Утро', 'Добрый день', 'Добрый Вечер', 'Доброй ночи']);

  

console.log(title);
}

export default dateRender