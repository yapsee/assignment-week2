import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolManagementService } from '../school-management.service';

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
  styleUrls: ['./classes-details.component.scss']
})
export class ClassesDetailsComponent implements OnInit {

  formUpdateActived : boolean = false;
  formAddActived : boolean = false;

  students = [];
  selectedClass: string;
  task_: {};
  lastName: string;
  firstName: string;
  class: string;

  constructor(private route: ActivatedRoute, router: Router, private school_service : SchoolManagementService) { 
    this.students =  this.school_service.getAllStudents();
  }

  ngOnInit() {

    this.selectedClass = this.route.snapshot.paramMap.get('name')!
    this.students =  this.school_service.getAllStudents();
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
    this.school_service.updateStudent(this.firstName, this.lastName, id, this.class);
    this.formUpdateActived = false;
  }
  openSudentAdd(){
    
    this.formAddActived = true;
  }

  addStudent(){
    const lastIndex = this.students.length - 1;
    const id = this.students[lastIndex].id + 1;
   this.school_service.addStudent(this.firstName, this.lastName, id, this.selectedClass);
    this.filterStudents();
    this.formAddActived = false;
  }
  
}


