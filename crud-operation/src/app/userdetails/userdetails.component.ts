import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';

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
    let id= this.route.snapshot.paramMap.get('id');
    this.object.getUserById(id).subscribe( data => {
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
