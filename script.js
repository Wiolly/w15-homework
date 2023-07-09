const cities = ["Москва", "Лондон", "Нью - Йорк", "Токио"];
const citiesTemperature = [];

for (let city of cities) {
  let temperature = prompt("Какая температура в городе " + city);
  citiesTemperature.push(temperature);
  alert(temperature);
}

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const p6 = document.querySelector(".p6");

p1.textContent = `Температура в городе  ${cities[0]} : ${citiesTemperature[0]}`;
p2.textContent = `Температура в городе  ${cities[1]} : ${citiesTemperature[1]}`;
p3.textContent = `Температура в городе  ${cities[2]} : ${citiesTemperature[2]}`;
p4.textContent = `Температура в городе  ${cities[3]} : ${citiesTemperature[3]}`;

const maxTemp = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
console.log(maxTemp(citiesTemperature));

const minTemp = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};
console.log(minTemp(citiesTemperature));

p5.textContent = `Максимальная температура : ${maxTemp(citiesTemperature)}°C`;
p6.textContent = `Минимальная температура: ${minTemp(citiesTemperature)}°C`;
