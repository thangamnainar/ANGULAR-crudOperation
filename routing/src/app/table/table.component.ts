import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  getUsers:any;
constructor (private obj:ServiceService,private route:Router){}

  ngOnInit(): void {
    this.obj.getUserFromDatabase().subscribe( data => {
      this.getUsers=data;
    })
  }
  edit(id:number){
    this.route.navigate(['form',id])
  }
  delete(id:number){
    this.obj.deleteUser(id).subscribe({
      next:(response)=>{
        console.log(response);        
      },
      error:(error)=>{
        console.log(error);   
      }
    })    
    console.log(id);
    this.obj.getUserFromDatabase().subscribe( data => {
      this.getUsers=data;
    })
    
  }

}