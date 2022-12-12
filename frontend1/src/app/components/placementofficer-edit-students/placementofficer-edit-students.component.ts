import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placementofficer-edit-students',
  templateUrl: './placementofficer-edit-students.component.html',
  styleUrls: ['./placementofficer-edit-students.component.css']
})
export class PlacementofficerEditStudentsComponent implements OnInit {

 
  students  : any = []
  courses   : any = []
  batches   : any = []
  programs  : any = []

  constructor(public apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getdata()
    this.getcourseData();
    this.getbatchData();
    this.getprogramData();

  }

  _id = this.apiService.formupdate;
  studentsdata: any ={

    student_name:'',
    contact_number:'',
    email_id:'',
    contact_address:'',
    course:'',
    batch:'',
    program:'',
    training_head:'',
    placement_officer:'',
    employment_status:'',
    course_status:''

    }

    getdata() {

      this.apiService.getStudentById(this._id).subscribe(res => {
        this.studentsdata = res;
        console.log("incoming data from update, get id", this._id);
        this.setoldvalue()
      });
    }

    updatestudentform: any = new FormGroup({
      student_name: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5)], ),
      contact_number: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      email_id: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5)]),
      contact_address: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5)]),
      course: new FormControl({ value: '', disabled: true }, [Validators.required]),
      batch: new FormControl({ value: '', disabled: true }, [Validators.required]),
      program: new FormControl({ value: '', disabled: true }, [Validators.required]),
      training_head: new FormControl({ value: '', disabled: true }, [Validators.required]),
      placement_officer: new FormControl({ value: '', disabled: true }, [Validators.required]),
      course_status: new FormControl({ value: '', disabled: true }, [Validators.required]),
      // no disbale for employment status 
      employment_status: new FormControl("", [Validators.required]),

    })

    setoldvalue() {
      this.updatestudentform.setValue({
        student_name: this.studentsdata.student_name,
        contact_number: this.studentsdata.contact_number,
        email_id: this.studentsdata.email_id,
        contact_address: this.studentsdata.contact_address,
        course: this.studentsdata.course,
        batch: this.studentsdata.batch,
        program: this.studentsdata.program,
        training_head: this.studentsdata.training_head,
        placement_officer: this.studentsdata.placement_officer,
        employment_status: this.studentsdata.employment_status,
        course_status: this.studentsdata.course_status,
  
      })
    }

    


  updateStudent(){

    this.apiService.updateStudent(this.updatestudentform.value,this._id).subscribe((res) => {

      console.log(this.updatestudentform.value,this._id)
      // this.blogerDatas = res;
      console.log("incoming data from update form ",this.updatestudentform.value,this._id );
    this.router.navigate(['/placementofficer-landing']);
    });
  }


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

}
