import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  constructor() { }


  firstName = "";
  lastName = "";
  class = "";
   students = [
    { id: 1, firstName: "Hawa",  lastName: "Ba", class: "Seconde L2b"},
    { id: 2, firstName: "Amadou",  lastName: "Tall", class: "Seconde L1a"},
    {  id: 3, firstName: "Yves",  lastName: "Amar", class: "Seconde S2b" },
    {  id: 4, firstName: "Rosale",  lastName: "Sy", class: "Premiere S1a" },
    {id: 5, firstName: "kalsoum ",  lastName: "Mbacke", class: "Terminale L2c"}
  ];
  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'class'];
  dataSource = this.students;

}
