import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../school-management.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {


  constructor( private school_service : SchoolManagementService) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'class'];
  dataSource = this.school_service.getAllStudents();

}
