import { Component } from '@angular/core';
import { ServiceService,postData,getUser } from '../service.service';

@Component({
  selector: 'app-put-users',
  templateUrl: './put-users.component.html',
  styleUrls: ['./put-users.component.scss']
})
export class PutUsersComponent {

  // url='http://localhost:3000/updateuser';
  // post: postData[] = [];
  Name!: string;
  age!:number;
  gender!:string;

  getUsers: getUser[] = [];
  constructor(public object:ServiceService){ }
  Createauser() {
    const postUrl:string = 'http://localhost:3000/adduser';
    const requestBody:postData= {
      name: this.Name,
      age: this.age,
      gender:this.gender
    };
    // this.post=this.object.postData(postUrl,requestBody).subscribe((data)=>{})
    this.object.postData(postUrl, requestBody).subscribe({
      next: (response: postData[]) => {
        console.log('POST request successful:', response);
      },
      
      error: (error: postData[]) => {
        console.error('POST request error:', error);
      }
    });
    this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
      this.getUsers = data;
    })
    console.warn('bodyyyyyyyy', requestBody);
    // console.log('ssssssss',this.pass);

    console.warn(this.getUsers);

  }

  getUserDetails(event: any){
    let getUser='';
    getUser=event
    console.log('userssssssss',getUser);
    
  }
}
