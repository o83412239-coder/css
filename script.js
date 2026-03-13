let count = 0;
const countEl = document.getElementById('count');
document.getElementById('increase').onclick = () => { count++; countEl.textContent = count; }
document.getElementById('decrease').onclick = () => { count--; countEl.textContent = count; }
document.getElementById('reset').onclick = () => { count = 0; countEl.textContent = count; }
