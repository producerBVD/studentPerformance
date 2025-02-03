const lessonTeacherMap = new Map([
  ["Математика", "Иванов И.И."],
  ["Физика", "Петров П.П."],
  ["Химия", "Сидоров С.С."],
  ["География", "Кузнецов К.К."],
  ["Музыка", "Смирнов С.С."],
  ["История", "Алексеев А.А."],
]);

const studentLessonsMap = new Map([
  ["Иванов И.И.", new Set(["Математика", "Физика"])],
  ["Петров П.П.", new Set(["Физика", "Химия"])],
  ["Сидоров С.С.", new Set(["Математика", "История"])],
  // Добавить других студентов и их уроки...
]);

function getStudentLessons(studentName) {
  return studentLessonsMap.get(studentName) || new Set();
}

function updateStudentLessons(studentName, lessonsArray) {
  studentLessonsMap.set(studentName, new Set(lessonsArray));
}

// Экспорт функций и данных
export { lessonTeacherMap, getStudentLessons, updateStudentLessons };
