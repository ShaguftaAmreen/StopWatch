var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;
function start(){
timer=true;
stopwatch();
}
function stop(){
timer=false;

}
function reset(){
timer=false;
 hr=0;
 min=0;
 sec=0;
 count=0;
document.getElementById("count").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
        document.getElementById("min").innerHTML="00";
        document.getElementById("hr").innerHTML="00";

}
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100)
        {
            sec=sec+1;
            count=0;
        }
        if(sec==60)
        {
            min=min+1;
        sec=0;
        }
        if(min==60)
        {
            min=0;
            sec=0;
            hr=hr+1;
        }
        var count1=count;
        var hr1=hr;
        var min1=min;
        var sec1=sec;
        if(hr<10)
        {
            hr1="0"+hr;
        }
        if(min<10)
        {
            min1="0"+min;
        }
        if(sec<10)
        {
            sec1="0"+sec;
        }
        if(count<10)
        {
            count1="0"+count;
        }
        document.getElementById("count").innerHTML=count1;
        document.getElementById("sec").innerHTML=sec1;
        document.getElementById("min").innerHTML=min1;
        document.getElementById("hr").innerHTML=hr1;
         setTimeout("stopwatch()",10);
        
    }
}