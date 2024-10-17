let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

// Sample reminders
let reminders = {
  "2024-06-19": ["Meeting at 10:00 AM", "Submit report"],
  "2024-06-21": ["Birthday party"],
  "2024-06-30": ["Pay rent"],
  // Add more reminders as needed
};

function createCalendar(year, month) {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let calendar = document.createElement("div");
  calendar.className = "calendar";

  // Header
  let header = document.createElement("div");
  header.className = "header flex justify-between items-center mb-4";
  header.innerHTML = `
                <button id="prev" class="prev bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">Prev</button>
                <div class="month font-bold text-l">${monthNames[month]} ${year}</div>
                <button id="next" class="next bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">Next</button>
            `;
  calendar.appendChild(header);

  // Days of the week
  let daysRow = document.createElement("div");
  daysRow.className = "days grid grid-cols-7 text-center font-bold";
  daysOfWeek.forEach((day) => {
    let dayDiv = document.createElement("div");
    dayDiv.className = "p-2";
    dayDiv.innerText = day;
    daysRow.appendChild(dayDiv);
  });
  calendar.appendChild(daysRow);

  // Dates
  let datesGrid = document.createElement("div");
  datesGrid.className = "dates grid grid-cols-7 text-center";

  let firstDay = new Date(year, month, 1).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  // Leading empty cells
  for (let i = 0; i < firstDay; i++) {
    let emptyCell = document.createElement("div");
    emptyCell.className = "p-2";
    datesGrid.appendChild(emptyCell);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    let dateCell = document.createElement("div");
    dateCell.className = "relative p-2";
    dateCell.innerText = day;

    // Highlight today
    let today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dateCell.className += " bg-orange-600 text-white rounded-full";
    }

    // Check for reminders
    let dateKey = `${year}-${month + 1}-${day}`;
    if (reminders[dateKey]) {
      let reminderList = document.createElement("ul");
      reminderList.className =
        "absolute left-0 right-0 mt-3 p-2 bg-white rounded-lg shadow-md border border-gray-200";
      reminders[dateKey].forEach((reminder) => {
        let reminderItem = document.createElement("li");
        reminderItem.textContent = reminder;
        reminderList.appendChild(reminderItem);
      });
      dateCell.appendChild(reminderList);
    }

    datesGrid.appendChild(dateCell);
  }

  calendar.appendChild(datesGrid);
  return calendar;
}

function renderCalendar(year, month) {
  let calendarDiv = document.getElementById("calendar");
  calendarDiv.innerHTML = ""; // Clear previous calendar
  calendarDiv.appendChild(createCalendar(year, month));

  // Add event listeners for buttons
  document.getElementById("prev").addEventListener("click", () => {
    if (month === 0) {
      month = 11;
      year--;
    } else {
      month--;
    }
    renderCalendar(year, month);
  });

  document.getElementById("next").addEventListener("click", () => {
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }
    renderCalendar(year, month);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCalendar(currentYear, currentMonth);
});
