import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  courses : any = [];
  users : any = [];
  

  constructor(  private apiService: ApiService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getcourseData();

  }

  adduserform: any=  new FormGroup({
    user_name: new FormControl('', Validators.required),
    contact_number: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email_id: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required]),
    course: new FormControl("", [Validators.required]),
    office_location: new FormControl("", [Validators.required]),
    user_type: new FormControl("", [Validators.required])
  })


  // function for get course data to selctbox

  getcourseData() {
    this.apiService.getcourseList().subscribe(res => {
      this.courses = res
  
      console.log(this.courses)
    })
  }

  adduser(){
    this.apiService.addnewuser(this.adduserform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully");
        this.router.navigate(['/user-list'])

        // console.log("incoming data from addbook", this.addbookform.value);
      }
      else{
        alert("Data not saved");
      }
    })
  }

}
