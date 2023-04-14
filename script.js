var segundos=0
var minutos=0
var horas=0
var intervalo

function iniciar (){

    intervalo = setInterval(time,1000)

}
function pausar (){

clearInterval(intervalo)

}
function parar (){

    clearInterval(intervalo)

    segundos=0
    minutos=0

    document.querySelector(".contador").innerText='00:00:00'

}


function digitos(digito){
    if(digito<10){
        return ('0' + digito)
    }else{
        return (digito)
    }
}

function time(){
    segundos++

    

    if(segundos == 60){
        minutos++
        segundos = 0
        if(minutos == 60){
            horas++
            minutos = 0
        }
    }


    document.querySelector(".contador").innerText=digitos(horas)+':'+digitos(minutos)+':'+digitos(segundos)
}