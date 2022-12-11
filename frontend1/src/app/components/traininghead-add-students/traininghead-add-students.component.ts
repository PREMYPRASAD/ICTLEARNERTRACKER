import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-traininghead-add-students',
  templateUrl: './traininghead-add-students.component.html',
  styleUrls: ['./traininghead-add-students.component.css']
})
export class TrainingheadAddStudentsComponent implements OnInit {

 
  students  : any = []
  courses   : any = []
  batches   : any = []
  programs  : any = []


 
  constructor(
    private apiService: ApiService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
    
  ngOnInit(): void {
    
    this.getcourseData();
    this.getbatchData();
    this.getprogramData();
   
  }

  addstudentform: any =  new FormGroup({
    student_name : new FormControl("", [Validators.required, Validators.minLength(5)]),
    contact_number: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email_id: new FormControl("", [Validators.required, Validators.minLength(5)]),
    contact_address : new FormControl("", [Validators.required, Validators.minLength(5)]),
    course: new FormControl("", [Validators.required]),
    batch:new FormControl("", [Validators.required]),
    program:new FormControl("", [Validators.required]),
    training_head:new FormControl("", [Validators.required]),
    placement_officer:new FormControl("", [Validators.required]),
    employment_status:new FormControl("", [Validators.required]),
    course_status:new FormControl("", [Validators.required])

  })

  // function for get course data to selctbox

  getcourseData() {
    this.apiService.getcourseList().subscribe(res => {
      this.courses = res
  
      console.log(this.courses)
    })
  }


  // function for get batch data to selectbox
  getbatchData() {
    this.apiService.getbatchList().subscribe(res => {
      this.batches = res

      console.log(this.batches)
    })
  }

    // function for get batch data to selectbox
  getprogramData() {
    this.apiService.getprogramList().subscribe(res => {
      this.programs = res

      console.log(this.programs)
    })
  }


 

  addstudent() {
    this.apiService.addstudent(this.addstudentform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully");
        // console.log("incoming data from addbook", this.addbookform.value);
        this.router.navigate(['/traininghead-landing'])
      }
      // console.log(res);
    })
    // console.log("incoming data from addbook", this.addbookform.value);
  };
}