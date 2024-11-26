let tempo = 0;
 let intervalo;
 function iniciarCronometro() {
 intervalo = setInterval(() => {
 tempo++;
 document.getElementById('tempo').textContent = tempo;
 }, 1000);
 }
 function pararCronometro() {
 clearInterval(intervalo);
 }
 function resetarCronometro() {
 tempo = 0;

 document.getElementById('tempo').textContent = tempo;
 clearInterval(intervalo)
 }
 
