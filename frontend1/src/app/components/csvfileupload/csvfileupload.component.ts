import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-csvfileupload',
  templateUrl: './csvfileupload.component.html',
  styleUrls: ['./csvfileupload.component.css']
})
export class CsvfileuploadComponent implements OnInit {

  constructor(private router : Router,
    private dialogRef : MatDialogRef<CsvfileuploadComponent>) { }
  selectedFile!: File;
  isDisabled:boolean = true;
  ngOnInit(): void {
  }
  //getting selected file and check whether csv or not
  onSelectedFile(event: any){
     this.selectedFile = <File>event.target.files[0];
     if(this.selectedFile.name.endsWith(".csv")){
       this.isDisabled = false;       
     }else{
       this.isDisabled = true;
       //this.toastr.warning("Only csv files allowed",'',{timeOut:2000});
       alert("only csv files allowed");
     }     
  }

  // upload csv
  uploadCSV(){
    const formData = new FormData();
    formData.append('csv', this.selectedFile, this.selectedFile.name);

}
//close dialogue form
  close() {
    this.dialogRef.close();    
  }
}