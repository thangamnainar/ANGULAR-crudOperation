import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
// import { log } from 'console';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  getOneUser:any;
  firstName:string='';
  lastName:string='';
  Form:any;
  constructor(private route:ActivatedRoute,private object:ServiceService){}

  ngOnInit(): void {
    let userId= this.route.snapshot.paramMap.get('id');
    // let json:any=this.route.snapshot.paramMap.get('json')
    // console.log(json[0]);
    
    this.object.getUserById(userId).subscribe( data => {
      this.getOneUser=data;
      // console.log(data);       
      
    })  
    
    // console.log(id);
    
  }
  clickFun(value:any){
    console.log(this.firstName); 
    console.log(this.lastName);
    console.log(';;;;;;;;;;',value);
    
    
  }


}
