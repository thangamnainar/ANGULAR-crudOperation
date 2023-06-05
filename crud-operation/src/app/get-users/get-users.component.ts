import { Component, OnInit ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked} from '@angular/core';
import { ServiceService, Users, getUser } from '../service.service';
// import { log } from 'console';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetusersComponent implements OnInit ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{

  getUsers: getUser[] = [];
  getTenUser: Users[] = [];

  constructor(public object: ServiceService) { }

  ngOnInit(): void {

    this.object.getDataFromjson().subscribe((data: Users[]) => {
      this.getTenUser = data;
    })

    this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
      this.getUsers = data;
      // console.warn(this.getUser);
    })

  };

  ngAfterViewInit(): void {
    // this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
    //   this.getUsers = data;
    //   // console.warn(this.getUsers);
    // })
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    // this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
    //   this.getUsers = data;
    //   console.warn(this.getUsers);
    // })
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    // this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
    //   this.getUsers = data;
    //   console.warn(this.getUsers);
    // })
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    // this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
    //   this.getUsers = data;
    //   console.warn(this.getUsers);
    // })
  }
  

  
}


