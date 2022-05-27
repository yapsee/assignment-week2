import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../school-management.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  name: string;
  formActived: boolean = false;

  constructor(private school_service : SchoolManagementService) { }

  ngOnInit() {
  }

  classes = this.school_service.getAllClasses()

  openClassAdd(){
    this.formActived = true;
  }

  addClass() {
   
    const lastIndex = this.classes.length - 1;
     const id = this.classes[lastIndex].id + 1;
    this.school_service.addClass(this.name, id)
    this.formActived = false;
  }

}

