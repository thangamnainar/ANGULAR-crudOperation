import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService, user, userdetails } from '../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private obj: ServiceService, private route: Router, private activatedRoute: ActivatedRoute) { }


  name: string = '';
  age!: number;
  gender!: any;
  studentObject: user[] = [];
  studentObject2!: userdetails;
  id!: number;
  boolean: boolean = true;

  Create(value: user[]) {
    this.studentObject = value;
    this.obj.createUser(this.studentObject).subscribe({
      next: (response) => {
        console.log('successfully user create', response);
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.route.navigate(['table']);
    // console.warn(this.studentObject);    
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.boolean =Boolean( this.activatedRoute.snapshot.paramMap.get('visible'));
    console.log('||............||',this.boolean);
    
    this.obj.getUserById(id).subscribe((data) => {
      console.log(typeof data); // Check the type of `data`
      
      if (data instanceof Array && data.length > 0) {
        const userDetails: userdetails = data[0];
        this.id = userDetails.id;
        this.name = userDetails.name;
        this.age = userDetails.age;
        this.gender = userDetails.gender;
        console.warn('userDetails', userDetails);
        
      }
    });
  }
  

  update() {
    this.studentObject2 = {
      id: this.id,
      name: this.name,
      age: this.age,
      gender: this.gender
    }
    this.obj.updateUser(this.studentObject2).subscribe({
      next: (response) => {
        console.log('update sucessfull', response);
        console.log(this.studentObject2);        
      },
      error: (error) => {
        console.warn('update error', error);

      }
    })
    // console.log(this.studentObject);
    this.route.navigate(['table'])

  }

}
