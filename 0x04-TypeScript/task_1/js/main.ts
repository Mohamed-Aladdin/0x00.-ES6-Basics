export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  yearsOfExperience?: number;
  locatin: string;
  [key: string]: any;
}

export interface Director extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this._firstName;
  }
}

export function createStudent(
  ctor: StudentClassConstructorInterface,
  firstName: string,
  lastName: string
): StudentClassInterface {
  return new ctor(firstName, lastName);
}
