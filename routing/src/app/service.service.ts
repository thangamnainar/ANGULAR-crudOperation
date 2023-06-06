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


  getUserById(id:string | null){
    const url= 'http://localhost:3000/getuser/';
    return this.http.get(url+id);
  };
  createUser(body:any){
    const url='http://localhost:3000/adduser';
    return this.http.post(url,body);
  };

  updateUser(updateData:any){
    const url='http://localhost:3000/updateuser';
    return this.http.put(url,updateData);
  };

  deleteUser(userId: number) {
    const url = 'http://localhost:3000/deleteuser';
   const  id={id:userId}    
    return this.http.put(url,id);
  };
  
}
