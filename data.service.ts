import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,map,throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DataService {
url:string="https://jsonplaceholder.typicode.com/posts/1/comments";
babyapi =environment.ApiURL
  constructor(private httpsrvice:HttpClient) { }

  getData(){
    this.httpsrvice.get<any>(this.url).pipe(catchError((error)=>{
      return throwError(error);
    }))

  }
postdata(data:any){
  return this.httpsrvice.post<any>(this.babyapi+ `submitdata`,data).pipe(map(res=>{
    console.log(res);
    return res;
  }))
}
getformdata(){
  return this.httpsrvice.get<any>(this.babyapi+ `getalldata`).pipe(map(res=>{
 return res;
}))
}

deletedataapi(id : any){
  return this.httpsrvice.get<any>(this.babyapi+ `deletedata/` + id).pipe(map(res=>{
 return res;
}))
}
}


