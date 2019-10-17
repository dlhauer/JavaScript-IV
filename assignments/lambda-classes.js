// CODE here for your Lambda Classes

//Person class
class Person {
  constructor(personAttrs) {
    this.name = personAttrs.name,
    this.age = personAttrs.age,
    this.location = personAttrs.location
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, and I\'m from ${this.location}. `);
  }
}

//Instructor class
class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty,
    this.favLanguage = instructorAttrs.favLanguage,
    this.catchPhrase = instructorAttrs.catchPhrase
  }

  demo(subject) {
    console.log(`Today, we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }

  changeGrade(student) {
    let amount = Math.floor(Math.random() * 100) + 1;

    while ( (student.grade - amount < 0 && amount % 2 === 0) || (amount + student.grade > 100 && amount % 2 != 0) ) {

      amount = Math.floor(Math.random() * 100) + 1;

    }
    
    if (amount % 2 === 0) {
      student.grade -= amount;
    }
    else {
      student.grade += amount;
    }
  }
}

//Student class
class Student extends Person {
  constructor(studentAttrs, instructor, projectmanager) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground,
    this.className = studentAttrs.className,
    this.favSubjects = studentAttrs.favSubjects,
    this.grade = studentAttributes.grade,
    this.instructor = instructor,
    this.projectmanager = projectmanager
  }

  listSubjects() {
    this.favSubjects.forEach( item => console.log(item) );
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun the Sprint Challenge on ${subject}.`)
  }

  graduate() {
    if ( this.grade >= 70 ) {
      console.log(`Congratulations, ${this.name}, you have a grade of ${this.grade}, which means you\'re ready to graduate!`);
    }
    else {
      console.log(`Sorry, ${this.name}, with your pathetic grade of ${this.grade}, you're not ready to graduate. Better bug someone to re-grade you.`);
    }
  }

  bugSomeone(person) { //Argument must be string
    console.log(`${this.name} says: \'Hey, ${this[person].name}, can you re-grade me?\'`);

    if (this.grade >= 70) {
      console.log(`${this[person].name} says: \'You've already got a passing grade. What do you want me to re-grade you for?\'`);
    }
    else {
      this[person].changeGrade(this);
      console.log(`${this[person].name} says: \'Okay, I've re-graded you. Your new grade is ${this.grade}.\'`)
    }
  }
}

//ProjectManager class
class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName,
    this.favInstructor = pmAttrs.favInstructor
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}: \'@channel standy time!\'`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}\'s code on ${subject}.`)
  }
}


// Initializing some objects
const instructorAttributes = {
  name: 'Brit',
  age: 31,
  location: 'Kanada',
  specialty: 'front-end',
  favLanguage: 'JS',
  catchPhrase: 'Hello, Web25'
}

const studentAttributes = {
  name: 'Dan',
  age: 32,
  location: 'Spokanistan',
  previousBackground: 'teaching and video', 
  className: 'Web25',
  favSubjects: ['array methods', 'algorithms', 'linear algebra'],
  grade: 87,
  instructor: '',
  projectmanager: '',
}

const pmAttributes = {
  name: 'Jimmy',
  age: 26, //Just guessing!
  location: 'Texas',
  specialty: 'React',
  favLanguage: 'Python', //Again, just guessing.
  catchPhrase: 'Hey y\'all guys',
  gradClassName: 'Web19', //Maybe?
  favInstructor: 'Archibald',  //Who knows?
}

const instructor1 = new Instructor(instructorAttributes);
const pm1 = new ProjectManager(pmAttributes);
const student1 = new Student(studentAttributes, instructor1, pm1);

// instructor1.demo('array methods');
// instructor1.grade(student1, 'JavaScript III');
// student1.listSubjects();
// student1.PRAssignment('Advanced CSS');
// student1.sprintChallenge('JavaScript Fundamentals');
// pm1.standUp('#web25_jimmy');
// pm1.debugsCode(student1, 'React Fundamentals');

//Testing the changeGrade method
console.log(`${student1.name}\'s current grade is ${student1.grade}.`)
pm1.changeGrade(student1);
console.log(`${student1.name}\'s new grade is ${student1.grade}.`)

student1.graduate(); 
student1.bugSomeone('projectmanager');



