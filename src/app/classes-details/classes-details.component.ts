import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
  styleUrls: ['./classes-details.component.scss']
})
export class ClassesDetailsComponent implements OnInit {

  formUpdateActived : boolean = false;
  formAddActived : boolean = false;

  students = [
    { id: 1, firstName: "Hawa",  lastName: "Ba", class: "Seconde L2b"},
    { id: 2, firstName: "Amadou",  lastName: "Tall", class: "Seconde L1a"},
    {  id: 45, firstName: "Yves",  lastName: "Amar", class: "Seconde S2b" },
    {  id: 4, firstName: "Rosale",  lastName: "Sy", class: "Premiere S1a" },
    {id: 5, firstName: "kalsoum ",  lastName: "Mbacke", class: "Terminale L2c"}
  ];
  selectedClass: string;
  task_: {};
  lastName: string;
  firstName: string;
  class: string;

  constructor(private route: ActivatedRoute, router: Router) { }

  ngOnInit() {

    this.selectedClass = this.route.snapshot.paramMap.get('name')!
    console.log('====class====', this.selectedClass.toString() )
    this.filterStudents();
  }

  filterStudents() {
    return  this.students.filter((student) => this.selectedClass === student.class);
  }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'class', 'actions'];

  


  deleteStudent(id: number) {
    this.students.splice(id, 1);
  }

  updateStudent(row: number) {

    this.formUpdateActived = true;
    this.task_ =  row;
    console.log('====TASK===',  this.task_ )

  }
  changeStudent(id){
    this.students.push({ lastName: this.lastName,  id, firstName: this.firstName , class: this.class});
    this.formUpdateActived = false;
  }
  openSudentAdd(){
    
    this.formAddActived = true;
  }

  addStudent(){
    const lastIndex = this.students.length - 1;
    const id = this.students[lastIndex].id + 1;
    this.students.push({ lastName: this.lastName,  id, firstName: this.firstName , class : this.selectedClass});
    this.filterStudents();
    this.formAddActived = false;
  }
  
}


