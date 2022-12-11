import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';




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

  constructor(private apiService: ApiService,  private router: Router) { }

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
}
