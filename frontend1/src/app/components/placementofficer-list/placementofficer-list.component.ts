import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placementofficer-list',
  templateUrl: './placementofficer-list.component.html',
  styleUrls: ['./placementofficer-list.component.css']
})
export class PlacementofficerListComponent implements OnInit {
  users : any = [];
  id:any;
  searchText:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  filterTerm!: string;
  constructor(private apiService: ApiService,  private router: Router) { }

  ngOnInit(): void {
    this.getuserData();
  }

  getuserData() {
    this.apiService.getuserList().subscribe(res => {
      this.users = res;
    })
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