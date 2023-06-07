import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  getUsers: any;
  Visible:boolean=false;
  
  constructor(private obj: ServiceService, private route: Router) { };

  ngOnInit(): void {
    this.obj.getUserFromDatabase().subscribe(data => {
      this.getUsers = data;
    })
  }
  edit(id: number) {
    console.log('id', id, this.Visible);    
    this.route.navigate(['form', id,this.Visible ]);
  }
  delete(id: number) {
    this.obj.deleteUser(id).subscribe({
      next: (response) => {
        console.log(response);
        // this.obj.getUserFromDatabase().subscribe(data => {
        //   this.getUsers = data;
        // });
        this.ngOnInit()
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  reciveVisible(data:string){
    // this.Visible=data;
    data='display:block';
    // console.log('||||',data);    
    
  } 
  
}