//Task#2
const student1 = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Бендер');
const student1Marks = [5, 4, 4, 5];
student1._arrayMarks = student1Marks;
console.log (student1.getInfo());

//Task#3
console.log('Mасив оцінок студента #1: ', student1.studentMarks);

//Task#4
 student1.marks = 5;
console.log('Mасив оцінок студента, після того, як ми поставили 5 студенту', student1._arrayMarks);

//Task#5
console.log(student1.getAverageMark());

//Task#6
console.log(`Виключимо студента!`);
student1.dismiss()
console.log("Поточний масив оцінок студента #1:", student1.studentMarks); 

//Task#7
console.log(`Поновимо студента!`);
student1.recover()
console.log("Поточний масив оцінок студента #1:" ,student1.studentMarks); 


console.log( `------------
  Advanced
------------
`)

const budgetStudent1 = new BudgetStudent("Cursor" , "1", "Markov Kyrylo");
console.log(budgetStudent1.getInfo());

const budgetStudent1Marks = [5, 5, 5, 4];
student1._arrayMarks = budgetStudent1Marks;
console.log(student1.getAverageMark());


console.log('Mасив оцінок студента #1 на бюджеті: ', student1.studentMarks);
budgetStudent1.getScholarship();

