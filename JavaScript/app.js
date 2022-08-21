document.body.style.backgroundColor = "Gainsboro";
document.body.style.textAlign = "center";
document.body.style.color = "Red";
let userName = prompt("İsim Bilgisi Giriniz :");
let name = document.querySelector("#name");
name.innerHTML = userName;

function startTime() {
  const today = new Date();
  const weekdays = new Array(7);
  weekdays[0] = "Pazar";
  weekdays[1] = "Pazartesi";
  weekdays[2] = "Salı";
  weekdays[3] = "Çarşamba";
  weekdays[4] = "Perşembe";
  weekdays[5] = "Cuma";
  weekdays[6] = "Cumartesi";
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let day = weekdays[today.getDay()];
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector("#date").innerHTML = h + ":" + m + ":" + s + ", " + day;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
