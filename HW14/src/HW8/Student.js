class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._arrayMarks = [];
    this._status = true;

  }
  getInfo() {
    return "Студент " + this.course + "го курса " + this.university + " - " + this.fullName;
  };

  get studentMarks() {
    if (this._status) {
      return this._arrayMarks;
    } else {
      return null;
    }
  };

  set marks(mark) {
    this._arrayMarks.push(mark);
  };

  getAverageMark() {
    return "Cередня оцінка студента: " + this._arrayMarks.reduce((acc, mark) => acc + mark, 0) / this._arrayMarks.length;
  };

  dismiss() {
    return this._status = false;
  }
  recover() {
    return this._status = true;
  };
};

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    this.scholarship = 1400;

    setInterval(() => {this.getScholarship()}, 30000);
    

  };

  getScholarship() { 
      if (this._status = true && this.getAverageMark() <= 4) { 
      console.log("НЕ бачити тобі стипендії");
      } else { 
      console.log("Ви отримали " + this.scholarship + " грн. стипендії");
      }
    
  }
}; 

// this._status && 