var today = new Date();

//functie waarmee de live tijd wordt weergeven
// in uren, minuten en seconden
function liveTijd(){
  var today = new Date();

  var seconds = addLeadingZero(today.getSeconds());
  var minutes = addLeadingZero(today.getMinutes());

  document.getElementById('clock').innerHTML = today.getHours() + ':' +  minutes +  ':' + seconds ;

  // functie waarmee er een 0 toevoegd wordt aan de uren, minuten en seconden
  function addLeadingZero(number) {
      if(number < 10){
          return '0' + number;
      }
      return number
  }
}

//variabele waramee de seconden het ook doen en meetellen.
var timevar = setInterval(liveTijd, 1000);

liveTijd();


//dag van de week
var dagen = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
//het weergeven van de dag van vandaag op de pagina
document.getElementById('dag').innerHTML =  dagen[today.getDay()];

//maanden van het jaar
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
//het weergeven van de dag, maand en het jaar van vandaag op de pagina
document.getElementById('datum').innerHTML = today.getDate()  + ' ' +  maanden[today.getMonth()] + ' ' +  today.getFullYear();;


//variabele waarin de dag van vandaag opgeslagen wordt
var rightNow = new Date();
//variabeel waarin de tijd op dit moment in opgeslagen wordt
var dayOrNight = rightNow.getHours();

//tekst voor overdag en nacht op de telefoon en tablet
function loadMedia(size){
// //het is overdag
if (size.matches && new Date().getHours() > 6 && new Date().getHours() < 18) {
  document.getElementById("weer").innerHTML = "Zonnig";
}
// het is nacht
else if(size.matches){
  document.getElementById("weer").innerHTML = "Bewolkt";
  }
}
// media querie in js
var size = window.matchMedia("(min-width:0px) and (max-width: 1279px)")
loadMedia(size)
size.addListener(loadMedia)




//tekst voor overdag en nacht op de kleine en grote desktop
function tekstOverdag(size){
  var rightNowOverdag = new Date();
  //het is overdag
  if (size.matches && rightNowOverdag.getHours() > 6 && rightNowOverdag.getHours() < 18) {
    document.getElementById("weer").innerHTML = "Overdag, zonnig en geen neerslag";
  }
  //het is nacht
  else if(size.matches){
      document.getElementById("weer").innerHTML = "Nacht, bewolkt en lichte buien";
  }

};

//media querie in javascript
var size = window.matchMedia("(min-width: 1279px)")
tekstOverdag(size)
size.addListener(tekstOverdag)




//afbeelding maan of zon voor overdag of nacht
if (dayOrNight > 6 && dayOrNight <= 18) {
  document.getElementById("zon").src = "css/images/dayOrNight/Zon.png";
} else {
  document.getElementById("zon").src = "css/images/dayOrNight/moon.png";
}

// het tonen van de achtergrond afbeelding
// waarden geven aan de achtergrond afbeelding
if (dayOrNight >= 6 && dayOrNight < 18) {
  document.body.style.background = "url('css/images/earthday/earthday.png')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "150em";
  document.body.style.backgroundPosition ="center";
} else {
 document.body.style.background = "url('css/images/earthnight/earthnight.jpg')";
 document.body.style.backgroundRepeat = "no-repeat";
 document.body.style.backgroundSize = "150em";
 document.body.style.backgroundPosition ="center";
}
