import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getUserFromDatabase() {
    const url = 'http://localhost:3000/getusers';
    return this.http.get(url);
  }


  getUserById(id:string|null){
    const url= 'http://localhost:3000/getuser/';
    return this.http.get(url+id);
  };
  createUser(body:user[]){
    const url='http://localhost:3000/adduser';
    return this.http.post(url,body);
  };

  updateUser(updateData:userdetails){
    const url='http://localhost:3000/updateuser';
    console.warn('service.',updateData);
    
    return this.http.put(url,updateData);
  };

  deleteUser(userId: number) {
    const url = 'http://localhost:3000/deleteuser';
   const  id={id:userId}    
    return this.http.put(url,id);
  };
  
}
export interface user{
  name:string,
  age:number,
  gender:string
}

export interface userdetails {
  id: number,
  name: string,
  age: number,
  gender: string
}