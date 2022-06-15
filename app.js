const countdown = ()=>{
 
    const endDate = new Date('June 30, 2024 00:00:00');

    //console.log(endDate)
    const now = new Date().getTime();
    const gap = endDate - now;
    
    //time math

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Math.floor

    let timeDay = Math.floor(gap / day);
    let timeHour = Math.floor((gap % day) / hour);
    let timeMinute = Math.floor((gap % hour) / minute);
    let timeSecond = Math.floor((gap % minute) / second);

    //operator

    timeHour = (timeHour < 10 ) ? '0' + timeHour:timeHour;
    timeMinute = (timeMinute < 10 ) ? '0' + timeMinute:timeMinute;
    timeSecond = (timeSecond < 10 ) ? '0' +timeSecond:timeSecond;

    //selector

    document.querySelector('.day').innerHTML = timeDay;
    document.querySelector('.hour').innerHTML = timeHour;
    document.querySelector('.minute').innerHTML = timeMinute;
    document.querySelector('.second').innerHTML = timeSecond;

}

setInterval(countdown, 1000);
countdown()

let date = new Date().getFullYear();
document.getElementById('year').innerHTML = date;