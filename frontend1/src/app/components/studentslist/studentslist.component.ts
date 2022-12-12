import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';

import { AddstudentsComponent } from '../addstudents/addstudents.component';
import { CsvfileuploadComponent } from '../csvfileupload/csvfileupload.component';


@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  students : any = [];
  id:any;
  searchText:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  filterTerm!: string;


  constructor(private apiService: ApiService,  private router: Router,private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getstudentData();

  }

  
  getstudentData() {
    this.apiService.getstudentsList().subscribe(res => {
      this.students = res;
    })
  }

  updatestudent(_id: any) {
    console.log(_id)
    this.apiService.formupdate = _id;
    console.log(_id)
    this.router.navigate(['/edit-students']);
  }

  deletestudent(id:any){
    this.apiService.deletestudent(id).subscribe(res=>{
      this.getstudentData()
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getstudentData();
  } 
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getstudentData();
  }

// show popup while clicking on Add learner
showAddLearner(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "500px";

  dialogConfig.data = {
    titlemode: 'Add Learner Details',
    id:''
  };

  const dialogRef = this.dialog.open(CsvfileuploadComponent, dialogConfig);
  
  // call below event once the dialog popup closed
  dialogRef.afterClosed().subscribe({
    next: (data) => {
      // if save clicked
      if(data){
        this.apiService.addstudent(data).subscribe(res =>{
          //this.toastr.success('Learner added successfully','',{timeOut:2000});
          alert("learner added successfully");
          this.getstudentData();
        })
      }
      else { // if close button clicked
        console.log("close without validation on add learner");
      }
    },
    error:(e) => {
     // this.toastr.error("Error adding learner. Please try again.","",{timeOut: 2000});
     alert("erroradding learner");
    }   
  }   
  ); 
}

showUploadCSV() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "500px";

  const dialogRef = this.dialog.open(CsvfileuploadComponent, dialogConfig);

  // call below event once the dialog popup closed
  dialogRef.afterClosed().subscribe({
    next:(data) => {
        // if save clicked
        if(data){
          //this.api.uploadCSV(data).subscribe({
          this.apiService.upload(data).subscribe({
            next:(res)=>{
              //this.toastr.success('Learner updated successfully','',{timeOut:2000});
              this.getstudentData();
            },
            error:(e)=>{
              //his.toastr.error(e.error,"",{timeOut: 2000});
              alert("error")
            }
          }            
          );          
        }
        else { // if close button clicked
          console.log("close without validation on add learner");
         // this.toastr.error("Upload Error. Please check mandatory fields and duplicates","",{timeOut: 2000});
        }        
    },
    error:(e)=>{
      console.log(e);
      //this.toastr.error("Upload Error. Please check mandatory fields and duplicates","",{timeOut: 2000});
    },
    complete:() => console.log("Upload popup closed")
  }); 

}

}
