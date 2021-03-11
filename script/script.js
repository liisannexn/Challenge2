var today = new Date();

var seconds = addLeadingZero(today.getSeconds());
var minutes = addLeadingZero(today.getMinutes());

// document.getElementById('uren').innerHTML = today.getHours() + 'h' ;
// document.getElementById('mins').innerHTML = minutes + 'm' ;
// document.getElementById('sec').innerHTML = seconds + 's' ;
document.getElementById('clock').innerHTML = today.getHours() + 'h' + ':' +  minutes + 'm' +  ':' + seconds + 's' ;
function addLeadingZero(number) {
    if(number < 10){
        return '0' + number;
    }
    return number
}

//dag van de week
var dagen = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
// ervoor zorgen dat er 1 minder komt.
document.getElementById('dag').innerHTML =  dagen[today.getDay()];

//Datum bestaande uit dag, maand en jaar waarin we leven
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('datum').innerHTML = today.getDate()  + ' ' +  maanden[today.getMonth()] + ' ' +  today.getFullYear();;

//het is overdag
if (new Date().getHours() > 6 && new Date().getHours() < 18) {
  document.getElementById("weer").innerHTML = "Overdag, Zonnig ";
}
// het is nacht
else {
  document.getElementById("weer").innerHTML = "Nacht";
}

//de afbeelding voor de zon en de maan weergeven
var rightNow = new Date();
var dayOrNight = rightNow.getHours();

if (dayOrNight > 6 && dayOrNight <= 18) {
  document.getElementById("zon").src = "css/images/zon.png";
  // document.body.style.backgroundImage = "url('../css/images/daglicht.jpg')";
} else {
  document.getElementById("zon").src = "css/images/maan.png";
}

// // document.body.style.backgroundImage = "url('css/images/daglicht.jpg')";
// if (dayOrNight < 6 && dayOrNight >= 18) {
//   document.body.style.backgroundImage = "url('css/images/earthday.jpg')";
// }
