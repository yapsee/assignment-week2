import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolManagementService } from '../school-management.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  name: string;
  formActived: boolean = false;
  classes: any;
  

  constructor(private school_service : SchoolManagementService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.school_service.fetchClasses().subscribe(response => {
      console.log('====response====', response)
      this.classes = response;
    });
  }


  openClassAdd(){
    this.formActived = true;
  }

  addClass(){
    this.school_service.addClass(this.name).subscribe(response => {
      this.router.navigate(['classes/details/' + this.name]);
    });
     
  }

}
