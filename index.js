var hour = 0
var min = 0
var sec = 0
var interval
var clicked = false

function twoDigits(digit) {
    if (digit < 10) {
        return ("0" + digit)
    } else {
        return digit
    }
}

function start() {
    if(!clicked){
        watch()
    interval = setInterval(watch, 1000)
    clicked = true
    } else {
        console.log("já foi iniciado!")
    }
}

function pause() {
    clearInterval(interval)
    clicked = false
}
function stop() {
    hour = 0
    min = 0
    sec = 0
    document.getElementById("watch").innerText = "00:00:00"
    pause()
    clicked = false
}
function watch() {
    sec++
    if (sec == 60) {
        min++;
        sec = 0
        if (min == 60) {
            hour++
            min = 0
        }
    }

    document.getElementById("watch").innerText = twoDigits(hour) + ":" + twoDigits(min) + ":" + twoDigits(sec)
}



function iniciarDespertador(){
    const timer = document.getElementById("timer")
    const hora = document.getElementById("horas-value").value;
    const minutos = document.getElementById("minutos-value").value;
    const segundos = document.getElementById("segundos-value").value;
    const somDespertador = new Audio("alarm_clock_5.mp3")

    if(hora == "" && minutos == "" && segundos == ""){
        alert("Não foi possível salvar o despertador, informe o horário corretamente.")
    }
    else{
        alert("Despertador programado para: " + hora + ":" + minutos + ":" + segundos)
        timer.innerText = `${hora} : ${minutos} : ${segundos}`
    }

    const interval = setInterval(function(){
        const date = new Date();
        const currentHour = date.getHours();
        const currentMinute = date.getMinutes();
        const currentSecond = date.getSeconds();

        if(currentHour == hora && currentMinute == minutos && currentSecond == segundos){
            somDespertador.play();
            var visualizou = confirm("Despertador tocando!");
            if(visualizou){
                somDespertador.pause();
                clearInterval(interval)
            }
        }
    }, 1000)
}