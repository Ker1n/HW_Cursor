const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

function splitStudents (students) {
  const arr = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
  return arr;
};

const pairs = splitStudents(students);

console.log('Task#1: ', splitStudents(students));

function pairsAndTheme(pairs, themes) {
    const arr = [];
        for (let i = 0; i < pairs.length; i++) {
            arr[i] = [pairs[i].join(" і "), themes[i]];
        }
    return arr;
}
console.log('Task#2: ',pairsAndTheme(pairs, themes));

function getMark() {
    let studentsMarks = []
        for (let i = 0; i < students.length; i++) {
            studentsMarks[i] = [students[i], marks[i]];
        }
    return studentsMarks;
}
console.log('Task#3: ',getMark());

function randomMark() {
    return Math.round(Math.random() * (5 - 1) + 1);
}

function pairsThemesRandomMark() {
    const finalArray = [];

    for (let i = 0; i < themes.length; i++) {
        finalArray[i] = [pairs[i].join(" і "), themes[i], randomMark()];;

    }
    return finalArray;
}
console.log('Task#4: ',pairsThemesRandomMark());