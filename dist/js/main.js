(()=>{"use strict";(()=>{const e=document.getElementById("title"),t=document.getElementById("title-time"),n=document.getElementById("title-newyear"),o=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],a=new Date;setInterval((()=>{const r=(new Date).toLocaleTimeString(),i=(e=>{let t=(new Date("31 december 2022").getTime()-(new Date).getTime())/1e3;return Math.floor(t/60/60/24)})(),l=function(e,t){let n=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:n>1&&n<5?t[1]:1==n?t[0]:t[2]}(i,["день","дня","дней"]),m=(d=["Доброе Утро","Добрый день","Добрый Вечер","Доброй ночи"],(c=a.getHours())>5&&c<12?d[0]:c>=12&&c<17?d[1]:c>=17&&c<20?d[2]:c>=20&&c<=23||0<=c&&c<=5?d[3]:void 0);var c,d;e.textContent=`${m},  сегодня ${o[a.getDay()]}`,t.textContent=`Текущее время: ${r}`,n.textContent=`До нового года осталось ${i} ${l}`}),1e3)})()})();