import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-programlist',
  templateUrl: './programlist.component.html',
  styleUrls: ['./programlist.component.css']
})
export class ProgramlistComponent implements OnInit {

  programs : any = []
  id:any

  constructor(private apiService: ApiService,  private router: Router) { }

  programdata={
    "program_name":"",
    "program_description":""
  }

  ngOnInit(): void {
    this.getprogramData();

  }

  
// function for add program data

addProgram(){
  this.apiService.addprogram(this.programdata).subscribe(res=>{
    this.programs=res
    alert('successfully added');
    this.router.navigate(['/program-list'])
    window.location.reload()

  })
} 

// function for get program data
getprogramData() {
  this.apiService.getprogramList().subscribe(res => {
    this.programs = res

    console.log(this.programs)
  })
}
// function for delete program data
deleteprogram(id:any){
  this.apiService.deleteprogram(id).subscribe(res=>{
    this.getprogramData()
  })
}


}
