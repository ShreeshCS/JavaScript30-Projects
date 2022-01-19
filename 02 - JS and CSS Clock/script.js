const hourhand = document.querySelector('.hour-hand')
const minhand = document.querySelector('.min-hand')
const sechand = document.querySelector('.sec-hand')

function setTime(){
    const clock = new Date()

    const sec = clock.getSeconds()
    const min = clock.getMinutes()
    const hour = clock.getHours()

    
    const hourdegree = ((hour / 12) * 360) + ((min/60)*30) + 90
    hourhand.style.transform = `rotate(${hourdegree}deg)`
    
    const mindegree = ((min / 60) * 360) + ((sec/60)*6) + 90
    minhand.style.transform = `rotate(${mindegree}deg)`
    
    const secdegree = ((sec / 60) * 360) + 90
    sechand.style.transform = `rotate(${secdegree}deg)`


}

setInterval(setTime, 1000)
setTime()