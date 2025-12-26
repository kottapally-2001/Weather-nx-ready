import './style.css';

const form = document.getElementById('weather-form');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');
const loading = document.getElementById('loading');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = locationInput.value.trim();
  if (!city) return;

  loading.hidden = false;
  weatherInfo.innerHTML = '';

  try {
    const res = await fetch(`http://localhost:3000/weather?city=${city}`);
    const data = await res.json();

    weatherInfo.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ ${data.temp} °C</p>
      <p>${data.desc}</p>
    `;
  } catch {
    weatherInfo.innerHTML = '<p style="color:red;">Could not fetch weather</p>';
  } finally {
    loading.hidden = true;
  }
});
