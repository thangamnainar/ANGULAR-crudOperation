import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService,user } from '../service.service';

interface userdetails{
  id:number,
  name:string,
  age:number,
  gender:string
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  constructor(private obj:ServiceService, private route:Router,private activateroute:ActivatedRoute){}
  

  name:string='';
  age!:number;
  gender!:any;
  studentObject:user[]=[];
  studentObject2!:userdetails;
  id!:number;

  table(value:user[]){
    this.studentObject=value;
    this.obj.createUser(this.studentObject).subscribe({
      next:(response) =>{
        console.log('successfully user create',response);        
      },
      error:(error)=>{
        console.log(error);        
      }
    })
    this.route.navigate(['table']);
    // console.warn(this.studentObject);    
  }

  ngOnInit(): void {
    let id= this.activateroute.snapshot.paramMap.get('id')
    this.obj.getUserById(id).subscribe((data:any) =>{
      this.id=data[0].id
      this.name=data[0].name
      this.age=data[0].age
      this.gender=data[0].gender
    })
    
  }
 update(){
  this.studentObject2={
    id:this.id,
    name:this.name,
    age:this.age,
    gender:this.gender
  }
  this.obj.updateUser(this.studentObject).subscribe({
    next:(response)=>{
      console.log('update sucessfull',response);      
    },
    error:(error)=>{
      console.warn('update error',error);
      
    }
  })
  // console.log(this.studentObject);
  this.route.navigate(['table'])
  
 }

}
