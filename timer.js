let deadline = ' ';
function getTimeRemaining(endTime){
    let t = Date.parse(endTime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000)%60),
    minutes = Math.floor((t/1000/60)%60),
    hours= Math.floor((t/(1000*60*60)));
    // days = Math.floor(t/(1000*60*60*24));
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(idElement, endTime){
    let timer = document.querySelector(`#${idElement}`),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateTime, 1000);

    
    function updateTime(){
        let t = getTimeRemaining(endTime);
            hours.textContent = t.hours,
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
        
            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
    }
}
setClock('timer', deadline);