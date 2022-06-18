import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SchoolManagementService } from '../school-management.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {


  eleves: any;
  dataSource: MatTableDataSource<unknown>;

  constructor( private school_service : SchoolManagementService) { }

  ngOnInit() {
    this.getData()
  }
  getData() {
    this.school_service.fetchStudents().subscribe(data => {
      console.log('====response====', data)
      this.eleves = data;
      this.dataSource = new MatTableDataSource(this.eleves);
    });
  }

  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'classId'];

}
