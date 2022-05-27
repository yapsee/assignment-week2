import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolManagementService {

  constructor() { }

  students = [
    { id: 1, firstName: "Hawa",  lastName: "Ba", class: "Seconde L2b"},
    { id: 2, firstName: "Amadou",  lastName: "Tall", class: "Seconde L1a"},
    {  id: 3, firstName: "Yves",  lastName: "Amar", class: "Seconde S2b" },
    {  id: 4, firstName: "Rosale",  lastName: "Sy", class: "Premiere S1a" },
    {id: 5, firstName: "kalsoum ",  lastName: "Mbacke", class: "Terminale L2c"}
  ];

  classes = [
    { id: 1 ,name: "Seconde L2b"},
    {id: 5, name: "Terminale L1a"}
  ];

  getAllStudents(){
    return this.students
  }

  getAllClasses(){
    return this.classes
  }

  addClass(name, id){
    return this.classes.push({ name: name,  id});
  }

  addStudent(firstname,lastname, id, classe){
   this.students.push({ firstName: firstname, lastName: lastname, id, class: classe });
  }

  updateStudent(firstname,lastname, id, classe){
    this.students.push({ firstName: firstname, lastName: lastname, id, class: classe });
   }


}
