// Массив студентов
const students = [
    { name: 'Иванов Иван', attendedClasses: new Set() },
    { name: 'Петров Петр', attendedClasses: new Set() },
    { name: 'Сидоров Сидор', attendedClasses: new Set() },
];

// Массив преподавателей
const teachers = [
    { name: 'Смирнов Алексей', subject: 'Математика' },
    { name: 'Кузнецова Анна', subject: 'Физика' },
    { name: 'Лебедев Сергей', subject: 'Химия' },
    { name: 'Павлова Мария', subject: 'География' },
    { name: 'Сидорова Ольга', subject: 'Музыка' },
    { name: 'Иванова Светлана', subject: 'История' }
];

// Map для хранения соответствия между уроком и преподавателем
const classTeacherMap = new Map([
    ['Математика', 'Смирнов Алексей'],
    ['Физика', 'Кузнецова Анна'],
    ['Химия', 'Лебедев Сергей'],
    ['География', 'Павлова Мария'],
    ['Музыка', 'Сидорова Ольга'],
    ['История', 'Иванова Светлана']
]);

// Функция для добавления преподавателя, если его нет
function addTeacherIfNotExists(teacherName, subject) {
    const existingTeacher = teachers.find((t) => t.name === teacherName);
    if (!existingTeacher) {
        teachers.push({ name: teacherName, subject: subject });
        classTeacherMap.set(subject.toLowerCase(), teacherName);
        console.log(`Добавлен преподаватель: ${teacherName} по предмету: ${subject}`); // Лог для проверки
    }
}

// Функция для отслеживания посещаемости
function markAttendance(studentName, className) {
    const student = students.find((s) => s.name === studentName);
    if (student) {
        student.attendedClasses.add(className);
    }
}

// Функция для добавления преподавателя в расписание
function addTeacherToSchedule(teacher) {
    const scheduleRows = document.querySelectorAll('.day-schedule');
    scheduleRows.forEach((row) => {
        const subjectCell = row.querySelector('td:nth-child(4)'); // Ячейка с предметом
        if (subjectCell.textContent.trim() === teacher.subject) {
            const teacherCell = row.querySelector('td:nth-child(3)'); // Ячейка с преподавателем
            teacherCell.textContent = teacher.name; // Заполняем ячейку именем преподавателя
            console.log(`Добавлен преподаватель ${teacher.name} к предмету ${teacher.subject}`); // Лог для проверки
        }
    });
}

// Функция для добавления преподавателя во все строки с предметом
function addTeacherToAllOccurrences(teacher) {
    const scheduleRows = document.querySelectorAll('.day-schedule');
    scheduleRows.forEach((row) => {
        const subjectCell = row.querySelector('td:nth-child(4)'); // Ячейка с предметом
        if (subjectCell.textContent.trim() === teacher.subject) {
            const teacherCell = row.querySelector('td:nth-child(3)'); // Ячейка с преподавателем
            teacherCell.textContent = teacher.name; // Заполняем ячейку именем преподавателя
            console.log(`Добавлен преподаватель ${teacher.name} к предмету ${teacher.subject}`); // Лог для проверки
        }
    });
}

// Пример использования
markAttendance('Морган', 'Математика');
markAttendance('Миллер', 'Физика');
markAttendance('Ньюхаус', 'Химия');


// Добавление нового преподавателя, если его нет
addTeacherIfNotExists('Кузнецова Анна', 'Физика');
addTeacherIfNotExists('Лебедев Сергей', 'Химия');
addTeacherIfNotExists('Павлова Мария', 'География');
addTeacherIfNotExists('Сидорова Ольга', 'Музыка');

// Заполнение таблицы расписания после загрузки страницы
window.onload = function () {
    const scheduleRows = document.querySelectorAll('.day-schedule');
    scheduleRows.forEach((row) => {
        const subjectCell = row.querySelector('td:nth-child(4)'); // Ячейка с предметом
        const subject = subjectCell.textContent.trim().toLowerCase(); // Убираем лишние пробелы и приводим к нижнему регистру
        const teacherName = classTeacherMap.get(subject); // Получаем имя преподавателя по предмету
        const teacherCell = row.querySelector('td:nth-child(3)'); // Ячейка с преподавателем
        // Проверка на наличие имени преподавателя перед заполнением
        if (teacherName) {
            teacherCell.textContent = teacherName; // Заполняем ячейку именем преподавателя
            console.log(`Преподаватель для предмета "${subject}": ${teacherName}`); // Лог для проверки
        } else {
            console.log(
                `Преподаватель для предмета "${subject}" не найден в classTeacherMap.`
            );
        }
        console.log(`Предмет: ${subject}, Преподаватель: ${teacherName}`); // Дополнительный лог
    });

    console.log('Студенты:', students);
    console.log('Преподаватели:', teachers);

    // Добавление преподавателей в расписание по их предметам во все места
    addTeacherToAllOccurrences({ name: 'Смирнов Алексей', subject: 'Математика' });
    addTeacherToAllOccurrences({ name: 'Кузнецова Анна', subject: 'Физика' });
    addTeacherToAllOccurrences({ name: 'Лебедев Сергей', subject: 'Химия' });
    addTeacherToAllOccurrences({ name: 'Павлова Мария', subject: 'География' });
    addTeacherToAllOccurrences({ name: 'Сидорова Ольга', subject: 'Музыка' });
    addTeacherToAllOccurrences({ name: 'Иванова Светлана', subject: 'История' });
};
