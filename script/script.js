var today = new Date();

function liveTijd(){
  var today = new Date();

  var seconds = addLeadingZero(today.getSeconds());
  var minutes = addLeadingZero(today.getMinutes());

  document.getElementById('clock').innerHTML = today.getHours() + ':' +  minutes +  ':' + seconds ;

  function addLeadingZero(number) {
      if(number < 10){
          return '0' + number;
      }
      return number
  }
}

var timevar = setInterval(liveTijd, 1000);

liveTijd();
//dag van de week
var dagen = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
// ervoor zorgen dat er 1 minder komt.
document.getElementById('dag').innerHTML =  dagen[today.getDay()];

//Datum bestaande uit dag, maand en jaar waarin we leven
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('datum').innerHTML = today.getDate()  + ' ' +  maanden[today.getMonth()] + ' ' +  today.getFullYear();;


// //het is overdag
if (new Date().getHours() > 6 && new Date().getHours() < 18) {
  document.getElementById("weer").innerHTML = "Zonnig";
}
// het is nacht
else {
  document.getElementById("weer").innerHTML = "Nacht";
  }

//de afbeelding voor de zon en de maan weergeven
var rightNow = new Date();
var dayOrNight = rightNow.getHours();

if (dayOrNight > 6 && dayOrNight <= 18) {
  document.getElementById("zon").src = "css/images/dayOrNight/Zon.png";
  // document.body.style.backgroundImage = "url('../css/images/daglicht.jpg')";
} else {
  document.getElementById("zon").src = "css/images/dayOrNight/moon.png";
}

// het tonen van de achtergrond afbeelding
if (dayOrNight >= 6 && dayOrNight < 18) {
  document.body.style.background = "url('css/images/earthday/earthday.png')";
} else{
 document.body.style.background = "url('css/images/earthnight/earthnight.jpg')";
}
//het geven van waarden aan de achtergrond
if (dayOrNight >= 6 && dayOrNight < 18) {
  document.body.style.background = "url('css/images/earthday/earthday.png')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "130em";
  document.body.style.backgroundPosition ="center";
} else{
document.body.style.background = "url('css/images/earthnight/earthnight.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "130em";
  document.body.style.backgroundPosition ="center";

}


//
// var mainHeading = document.getElementById('weer');
//
// mainHeading.classList.add('changesSize');
