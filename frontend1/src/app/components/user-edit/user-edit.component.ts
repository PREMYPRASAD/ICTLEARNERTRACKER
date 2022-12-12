import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  courses : any = [];
  users : any = [];

  constructor(public apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getcourseData();

  }
  _id = this.apiService.formupdate;
  userdata : any = {
    user_name:'',
    contact_number:'',
    email_id:'',
    course:'',
    password:'' ,
    office_location: '' ,
    user_type: ''
  }

  getdata() {

    this.apiService.getuserdetails(this._id).subscribe(res => {
      this.userdata = res;
      console.log("incoming data from update, get id", this._id);
      this.setoldvalue()
    });
  }

  edituserform: any=  new FormGroup({
    user_name: new FormControl('', Validators.required),
    contact_number: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email_id: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required]),
    course: new FormControl("", [Validators.required]),
    office_location: new FormControl("", [Validators.required]),
    user_type: new FormControl("", [Validators.required])
  })

  setoldvalue() {
    this.edituserform.setValue({
      user_name: this.userdata.user_name,
      contact_number: this.userdata.contact_number,
      email_id: this.userdata.email_id,
      password: this.userdata.password,
      course: this.userdata.course,
      office_location: this.userdata.office_location,
      user_type: this.userdata.user_type,
     

    })
  }


  getcourseData() {
    this.apiService.getcourseList().subscribe(res => {
      this.courses = res
  
      console.log(this.courses)
    })
  }

  edituser(){
    this.apiService.updateuserdetails(this.edituserform.value,this._id).subscribe((res) => {

      console.log(this.edituserform.value,this._id)
      // this.blogerDatas = res;
      console.log("incoming data from update form ",this.edituserform.value,this._id );
    this.router.navigate(['/user-list']);
    });

  }


}
