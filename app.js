var msec = document.getElementById('msec')
var sec = document.getElementById('sec')
var min = document.getElementById('min')

var millisec= 0;
var seconds = 0
var minutes = 0
var interval;

function started(){
    interval = setInterval(function(){
        millisec++
        msec.innerHTML=millisec
        
        if (millisec>=100){
            seconds++
            sec.innerHTML= seconds
            millisec=0
        }
        
    
        else if(seconds>=60){
        minutes++
        min.innerHTML=minutes
        seconds=0
         }
    },10)
    document.getElementById('btn').disabled = true
    
}

function stoped(){
clearInterval(interval)
document.getElementById('btn').disabled=false
}


function reset(){document.getElementById('btn').disabled = false
    clearInterval(interval)
  millisec=0
  seconds=0
  minutes= 0
  msec.innerHTML=millisec
  min.innerHTML=minutes
  sec.innerHTML=seconds
}


// document.getElementById('btn').disabled=true


