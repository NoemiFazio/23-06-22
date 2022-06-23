// Timeout (Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato)   +
// DOM
// Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

(function () {
  const array = [1, 5, 10];
  const times = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    console.log(hours, minutes, seconds);
    document.body.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
  };
  array.forEach((item) => {
    setTimeout(times, 1000 * item);
  });
})();

console.clear();

// Interval
// Fare il console.log analogo a quello mostrato su time.is

(function () {
  console.clear();

  const array = [1, 5, 10];
  const times = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    console.log(hours, minutes, seconds);
    document.body.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
  };

  // setInterval(times, 1000);
  // clearInterval(times, 5000);
})();
console.clear();
