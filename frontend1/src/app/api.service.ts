import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:3000/api'
  // apiUrl:String ='api'

  constructor(private http :HttpClient) { }

  // all end points are here


//------------------------------------------  Students end points are here ------------------------------------------------- //

//to fetch all students data list
getstudentsList(){
  return this.http.get(`${this.apiUrl}/studentlist`)
}

// Get Studentby id 
getStudentById(_id:any){
  return this.http.get(`${this.apiUrl}/student/${_id}`)
}

// to add new Student  
addstudent(data:any){
  return this.http.post(`${this.apiUrl}/student`, data)

}

// update student
updateStudent(data: any, _id: any){
  return this.http.put(`${this.apiUrl}/student`, { data, _id });

}

// to delete student
deletestudent(id:any){
  return this.http.delete(`${this.apiUrl}/student/${id}`)
}

//------------------------------------------  Students end points ends here ------------------------------------------------- //
//-------------------------------------------USER end points strts here----------------------------------//
getuserList(){   
  return this.http.get(`${this.apiUrl}/userlist`);  
}

addnewuser(data:any){
  return this.http.post(`${this.apiUrl}/user`, data);  
}

getuserdetails(id:any){
  return this.http.get(`${this.apiUrl}/user/${id}`);
}

updateuserdetails(data: any, _id: any){
  return this.http.put(`${this.apiUrl}/user`,data);
}

deleteuserDetails(id:any){
  return this.http.delete(`${this.apiUrl}/user/${id}`)
}
//---------------------------------------user end points ends here--------------------------------------//

//------------------------------------------  settings end points are here ------------------------------------------------- //

// start batch

// to add batch
addbatch(data:any){
  return this.http.post(`${this.apiUrl}/add_batch`, data)

}


//to fetch all batch data list
getbatchList(){
  return this.http.get(`${this.apiUrl}/batchlist`)
}


// to delete batch
deletebatch(id:any){
  return this.http.delete(`${this.apiUrl}/deletebatch/${id}`)
}


//end batch

// start course 

// to add course
addcourse(data:any){
  return this.http.post(`${this.apiUrl}/add_course`, data)

}

//to fetch all course data list
getcourseList(){
  return this.http.get(`${this.apiUrl}/courselist`)
}


// to delete course
deletecourse(id:any){
  return this.http.delete(`${this.apiUrl}/deletecourse/${id}`)
}


//end course

// start program 

// to add program
addprogram(data:any){
  return this.http.post(`${this.apiUrl}/add_program`, data)

}

//to fetch all program data list
getprogramList(){
  return this.http.get(`${this.apiUrl}/programlist`)
}


// to delete program
deleteprogram(id:any){
  return this.http.delete(`${this.apiUrl}/deleteprogram/${id}`)
}


//end program

//------------------------------------------  settings end points are here ------------------------------------------------- //


uploadCSV(file:any) {
  return this.http.post(`${this.apiUrl}/uploadlearners`, file)
}

upload(file:any) {
  return this.http.post(`${this.apiUrl}/upload`, file)
}




public formupdate: any;

}