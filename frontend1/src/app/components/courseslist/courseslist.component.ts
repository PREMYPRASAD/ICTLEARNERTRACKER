import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CourseslistComponent implements OnInit {

  courses : any = []
  id:any

  constructor(private apiService: ApiService,  private router: Router) { }

  coursedata={
    "course_name":"",
    "course_description":""
  }

  ngOnInit(): void {
    this.getcourseData();

  }

  
// function for add course data

addCourse(){
  this.apiService.addcourse(this.coursedata).subscribe(res=>{
    this.courses=res
    alert('successfully added');
    this.router.navigate(['/course-list'])
    window.location.reload()

  })
} 

// function for get course data
getcourseData() {
  this.apiService.getcourseList().subscribe(res => {
    this.courses = res

    console.log(this.courses)
  })
}

// function for delete course data
deletecourse(id:any){
  this.apiService.deletecourse(id).subscribe(res=>{
    this.getcourseData()
  })
}


}
