import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolManagementService {
   url = 'http://localhost:4000';
 
  constructor(private httpClient: HttpClient) { 
  }


 
   fetchStudents() : Observable<any>{
    return this.httpClient.get(this.url+ '/students');
  }

  fetchClasses() : Observable<any>{
    return this.httpClient.get(this.url + '/classes');

  }

  addStudent(firstname: string,lastname:string, classe:string): Observable<any>{
    console.log('====STUDENT===',  firstname , lastname, classe)
    return this.httpClient.post(this.url + '/students', { "firstName": firstname, "lastName": lastname, "classId": classe });
  }

  addClass(name): Observable<any> {
     return this.httpClient.post(this.url + '/classes', { "name": name });
  }

  deleteStudent(id): Observable<any> {
    return this.httpClient.delete(this.url + '/students/' + id);
  }

  updateStudent(id, firstname: string, lastname:string, classe:string): Observable<any>{
    console.log('====TASK===', id, firstname, lastname, classe)
    return this.httpClient.put(this.url + '/students/' + id, { "firstName": firstname, "lastName": lastname, "classId": classe });
  }


  

  // updateStudent(firstname,lastname, id, classe){
  //   this.students.push({ firstName: firstname, lastName: lastname, id, class: classe });
  //  }


}
