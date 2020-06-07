var date = new Date();
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","<b>Thursday","<b>Friday","Saturday"]
var day=date.getDay();
var today = daysInWeek[day];
var hours =date.getHours();
var min =date.getMinutes();


function home(){
document.getElementById("screen").innerText=(today+" "+hours+":"+min);

}


function message(){

document.getElementById("screen").innerHTML="Messages"+" "+hours+":"+min+" \n\n Hola!....This is message\n";


}



