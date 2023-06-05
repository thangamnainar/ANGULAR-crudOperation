import { Component,OnInit } from '@angular/core';
import { ServiceService ,getUser} from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  getusers:getUser[]=[];
  userId!: number;
  constructor(private object:ServiceService,private router:Router){ }

  ngOnInit(): void {

    this.object.getUserFromDatabase().subscribe(data =>{
      this.getusers=data;
    })
  }
  getAboutUserData(id:number){
    let json={
      name:'thangam',
      age:21
    }
    this.userId=id;
    this.router.navigate(['userDetails/'+json+'/'+this.userId])
    // console.log(this.userId);
    
  }


}
