(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7,
    month = day * 30.4375,
    year = day * 365.25;

  // console.log(birthday); // 09/30/2024 | mm/dd/yyyy
  const birthday = '12/31/2025';
  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      // Calculate time units
      const years = Math.floor(distance / year);
      const months = Math.floor((distance % year) / month);
      const weeks = Math.floor((distance % month) / week);
      const days = Math.floor((distance % week) / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      // Display time units
      document.getElementById("years").innerText = years;
      document.getElementById("months").innerText = months;
      document.getElementById("weeks").innerText = weeks;
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0);
})();
