import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
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
  dataSource: MatTableDataSource<any>;
  selectedClassId: any;
  newclass: any;

  constructor(private route: ActivatedRoute, private router: Router, private school_service : SchoolManagementService) { 

  }

  async ngOnInit() {

    this.selectedClass = this.route.snapshot.paramMap.get('name')!
    await this.getClassId();
    this.getData();
    console.log('====class====', this.selectedClass.toString() )
    this.filterStudents();
   
   
  }

  getData() {
    this.school_service.fetchStudents().subscribe(data => {
      this.students = data;
    });
  }

  filterStudents() {
    return this.students.filter((student) => this.selectedClass == student.classId.name);
  }

  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'classId', 'actions'];

  
  getClassId(selectedClass?: string) {
    this.school_service.fetchClasses().subscribe(data => {
      this.selectedClassId = data.filter((class_) => class_.name == this.selectedClass)[0]._id;
      //console.log('====CLASSID===',  this.selectedClassId )
    }
    );
  }


  deleteStudent(row) {
    console.log('====ID====', row._id)
    this.school_service.deleteStudent(row._id).subscribe(data => { 
      alert('Student deleted');
      this.getData();
    });
    this.router.navigate(['classes/details/' + this.selectedClass]);
    this.filterStudents();
  }

  updateStudent(row: number) {
    this.formUpdateActived = true;
    this.task_ =  row;
    console.log('====TASK===',  this.task_ )

  }
    changeStudent(id, student){
      this.searchUpdateClass(student.class)
      console.log('====NEW CLASSID===',  this.newclass )
      this.school_service.updateStudent(id, student.firstName, student.lastName, this.newclass).subscribe(data => { 
          this.getData();
        }
      );
      this.router.navigate(['classes/details/' + this.selectedClass]);
      this.formUpdateActived = false;
  }

  openSudentAdd(){
    this.formAddActived = true;
  }

   addStudent(){
    this.school_service.addStudent(this.firstName, this.lastName, this.selectedClassId).subscribe(data => {
      this.getData();
    });
    this.router.navigate(['classes/details/' + this.selectedClass]);
    this.filterStudents();
    this.formAddActived = false;
  
   }


    searchUpdateClass(updatedclass) {
   
     this.school_service.fetchClasses().subscribe(data => {
      this.newclass = data.filter((class_) => class_.name == updatedclass)[0]._id;
      console.log('====NEW CLASSID===',  this.newclass )
    }
    );
  }

  
}


