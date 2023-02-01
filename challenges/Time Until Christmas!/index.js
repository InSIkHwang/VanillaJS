const clockTitle = document.querySelector(".js-clock");

function dDay() {
  const christmas = new Date("2023-12-25T00:00:00");
  const now = new Date();
  const distance = christmas.getTime() - now.getTime();

  const day = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(dDay, 1000);
