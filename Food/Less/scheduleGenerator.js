const scheduleData = [
  {
    week: "Первая неделя",
    days: [
      {
        name: "Понедельник",
        subjects: [
          { teacher: "Иванов И.И.", subject: "Математика", time: "08:00 - 09:30" },
          { teacher: "Петров П.П.", subject: "Физика", time: "10:00 - 11:30" },
          { teacher: "Сидоров С.С.", subject: "Химия", time: "12:00 - 13:30" },
          { teacher: "Кузнецов К.К.", subject: "География", time: "14:00 - 15:30" },
          { teacher: "Смирнов С.С.", subject: "Музыка", time: "16:00 - 17:30" },
        ],
      },
      // Добавить остальные дни недели...
    ],
  },
  // Добавить остальные недели...
];

// Функция для генерации расписания
function generateSchedule() {
  console.log("Генерация расписания начата");
  const tableBody = document.querySelector("tbody"); // Получение элемента tbody для добавления строк
  scheduleData.forEach(week => {
    const weekRow = document.createElement("tr"); // Создание строки для недели
    weekRow.className = "week-header"; // Установка класса для строки недели
    weekRow.onclick = () => toggleWeek(weekRow.id); // Добавление обработчика клика для скрытия/показа недели
    weekRow.id = week.week; // Установка id для строки недели
    weekRow.innerHTML = `<td>${week.week}</td><td colspan="4"></td>`; // Заполнение строки недели
    tableBody.appendChild(weekRow); // Добавление строки недели в таблицу

    week.days.forEach(day => {
      const dayRow = document.createElement("tr"); // Создание строки для дня
      dayRow.className = "day-schedule"; // Установка класса для строки дня
      dayRow.setAttribute("data-week", week.week); // Установка атрибута data-week
      dayRow.innerHTML = `<td></td><td rowspan="6">${day.name}</td>`; // Заполнение строки дня
      tableBody.appendChild(dayRow); // Добавление строки дня в таблицу

      day.subjects.forEach((subject, index) => {
        const subjectRow = document.createElement("tr"); // Создание строки для предмета
        subjectRow.className = "day-schedule"; // Установка класса для строки предмета
        subjectRow.setAttribute("data-week", week.week); // Установка атрибута data-week
        subjectRow.innerHTML = `<td></td><td>${subject.teacher}</td><td>${subject.subject}</td><td>${subject.time}</td>`; // Заполнение строки предмета
        tableBody.appendChild(subjectRow); // Добавление строки предмета в таблицу
      });
    });
  });
  console.log("Генерация расписания завершена"); // Лог завершения генерации расписания
}

// Вызов функции генерации расписания при загрузке документа
document.addEventListener("DOMContentLoaded", generateSchedule);
