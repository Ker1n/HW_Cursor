const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];



//Task#1
const getSubjects = id => Object.keys(students[id].subjects).map(subject => subject[0].toUpperCase() + subject.slice(1).toLowerCase().replace("_", ' '));
console.log('getSubjects: ', getSubjects(0));
    
//Task#2
function getAverageMark (id)  { 
  arr = Object.values(students[id].subjects);
  sumArray = (arr[0].concat(arr[1], arr[2]));
  result = 0;
    for (let i = 0; i < sumArray.length; i++) {
      result += sumArray[i]
    }
  average = result / sumArray.length;
  return average.toFixed(2);
}

console.log('getAverageMark: ', getAverageMark(0));


//Task#3
function getStudentInfo (id) { 
 name = students[id].name;
 course = students[id].course;
 result = "Student's name: " + name + ", " + "course: " + course + "," + " average mark: " + getAverageMark(id);
  return  result
}
console.log('getStudentInfo: ', getStudentInfo(0));


//Task#4
function getStudentsNames () { 
   result = "" ; 
  for (let i = 0; i < students.length; i++) {
    result += students[i].name + " ";
  }
  return result.split(" ").sort().slice(1);
}
console.log('getStudentsNames: ', getStudentsNames());

//Task#5



// function getBestStudent(students){
//     let index = [];
//     let mark = 0;
//     for (let i = students.length; i < students.length; i++){
//         // if(getAverageMark() > mark){
//         //     mark = getAverageMark();
//         //     index = i;
//         // }
//     }
//     return students[index].name;
// }

// console.log(getBestStudent(students));


//Task#6

function calculateWordLetters(word) {
  
   word = word
  .split("")
  .reduce((letter, times) => {
      letter[times] = (letter[times] || 0) + 1;
      return letter;
  }, new Object);
  return word;
}
console.log('calculateWordLetters: ', calculateWordLetters("test"));
