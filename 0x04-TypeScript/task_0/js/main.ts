export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  location: "Washington",
};

const secondStudent: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  location: "North Carolina",
};

const studentsList: Student[] = [firstStudent, secondStudent];
const table = document.getElementById("studentTable") as HTMLTableElement;

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});
