import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http:HttpClient,
   ) { }


  getData():Observable<any>{
    return this .http.get('http://localhost:3000/data').pipe(
      map(res=>res)
    
      // catchError(err=>)
      )
  }
}
