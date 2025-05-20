const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorBox = document.getElementById('colorBox');
const rgbValue = document.getElementById('rgbValue');
const hexValue = document.getElementById('hexValue');
const resetBtn = document.getElementById('resetBtn');
const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

function updateColor() {
  const r = parseInt(redSlider.value);
  const g = parseInt(greenSlider.value);
  const b = parseInt(blueSlider.value);

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = "#" + [r, g, b].map(x =>
    x.toString(16).padStart(2, '0')
  ).join('');

  colorBox.style.backgroundColor = rgb;
  rgbValue.textContent = rgb.toUpperCase();
  hexValue.textContent = hex.toUpperCase();
}

[redSlider, greenSlider, blueSlider].forEach(slider => {
  slider.addEventListener('input', updateColor);
});

resetBtn.addEventListener('click', () => {
  redSlider.value = 0;
  greenSlider.value = 0;
  blueSlider.value = 0;
  updateColor();
});

if (!body.classList.contains('dark') && !body.classList.contains('light')) {
  body.classList.add('light'); // Define o modo claro como padrão
}
toggleThemeBtn.textContent = body.classList.contains('light') ? '🌙 Modo Escuro' : '🌞 Modo Claro';

toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  toggleThemeBtn.textContent = body.classList.contains('light') ? '🌙 Modo Escuro' : '🌞 Modo Claro';
});

updateColor(); // inicializa
