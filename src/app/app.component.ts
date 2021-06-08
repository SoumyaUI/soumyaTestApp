import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/service.service';

interface Users {
  name: string,
  email: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'test-app';
  users: Users[] = [];
  selectedUser: Users;
  loading: boolean = false;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getApi().subscribe((res:any) => {
     this.loading = true;
     if(res.length){
      this.users = res.map((ele:any) => {
        return { name: ele.name, email: ele.email}
      });
     }
    
    })
  }

  selectedData(user){
    this.selectedUser = user;
  }
}
