interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yeasrOfExperience?: number;
    location: string;
    contract: boolean;
    [propName: string]: any;
}

/*
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3); */

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  /*
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    contract: true,
  };
  console.log(director1);
  */

  interface printTeacherFunction {
    (firstName: string, lastName:string): string;
  }

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  }