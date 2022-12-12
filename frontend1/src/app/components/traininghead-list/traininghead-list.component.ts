import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-traininghead-list',
  templateUrl: './traininghead-list.component.html',
  styleUrls: ['./traininghead-list.component.css']
})
export class TrainingheadListComponent implements OnInit {

  users : any = [];
  id:any;
  searchText:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  filterTerm!: string;

  constructor(private apiService: ApiService,  private router: Router, public auth: AuthService) { }

 
  ngOnInit(): void {
    this.getuserData();
  }

  getuserData() {
    this.apiService.getuserList().subscribe(res => {
      this.users = res;
    })
  }

  edituser(_id: any) {
    console.log(_id)
    this.apiService.formupdate = _id;
    console.log(_id)
    this.router.navigate(['/user-edit']);
  }
  
  deleteuser(id:any){
    this.apiService.deleteuserDetails(id).subscribe(res=>{
      this.getuserData()
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getuserData();
  } 
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getuserData();
  }
}
