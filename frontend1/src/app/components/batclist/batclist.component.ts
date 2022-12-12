import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-batclist',
  templateUrl: './batclist.component.html',
  styleUrls: ['./batclist.component.css']
})
export class BatclistComponent implements OnInit {

  batches : any = []
  id:any

  constructor(private apiService: ApiService,  private router: Router) { }


  batchdata={
    "batch_name":"",
    "batch_description":""
  }

  ngOnInit(): void {
    this.getbatchData();
  }
  batchadd:  any =  new FormGroup({
    batch_name : new FormControl(""),
    batch_description: new FormControl(""),

  })

// FUNCTION FOR ADDING BATCH DATA

addBatch(){
  this.apiService.addbatch(this.batchdata).subscribe(res=>{
    this.batches=res
    alert('successfully added');
    this.router.navigate(['/batch-list'])
    window.location.reload()

  })
} 


// function for get batch data
  getbatchData() {
    this.apiService.getbatchList().subscribe(res => {
      this.batches = res

      console.log(this.batches)
    })
  }
// function for delete batch data
  deletebatch(id:any){
    this.apiService.deletebatch(id).subscribe(res=>{
      this.getbatchData()
    })
  }

}
