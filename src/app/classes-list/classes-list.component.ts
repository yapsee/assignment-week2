import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  name: string;
  formActived: boolean = false;

  constructor() { }

  id: ''
   students = [
    { id: 1, firstName: "Hawa",  lastName: "Ba", class: "Seconde L2b"},
    { id: 2, firstName: "Amadou",  lastName: "Tall", class: "Seconde L1a"},
    {  id: 45, firstName: "Yves",  lastName: "Amar", class: "Seconde S2b" },
    {  id: 4, firstName: "Rosale",  lastName: "Sy", class: "Premiere S1a" },
    {id: 5, firstName: "kalsoum ",  lastName: "Mbacke", class: "Terminale L2c"}
  ];


  classes_ = [
    { id: 1 ,name: "Seconde L2b"},
    {id: 5, name: "Terminale L1a"}
  ];



 

  ngOnInit() {
  }

  classes= this.classes_

  openClassAdd(){
    this.formActived = true;
  }

  addClass() {
   
    const lastIndex = this.classes.length - 1;
     const id = this.classes[lastIndex].id + 1;
    this.classes_.push({ name: this.name,  id});
    this.formActived = false;
  }

}

