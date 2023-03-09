const calendar = document.querySelector('.calendar');
const monthText = document.querySelector('.month');
const yearText = document.querySelector('.year');
const cells = document.querySelector('.cells');

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function updateCalendar() {
  // Update month and year text
  monthText.textContent = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(currentYear, currentMonth));
  yearText.textContent = currentYear;

  // Clear old cells
  cells.innerHTML = '';

  // Calculate days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Calculate first day of month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Fill in empty cells for days before first day of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const cell = document.createElement('div');
    cells.appendChild(cell);
  }

  // Fill in cells for days in current month
  for (let i = 1; i <= daysInMonth; i++) {
    const cell = document.createElement('div');
    cell.textContent = i;
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && i === today.getDate()) {
      cell.classList.add('today');
    }
    cells.appendChild(cell);
  }
}

updateCalendar();
