import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { Response } from '../Response';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})


export class MomentService {
  private baseApiurl = environment.baseApiurl;
  private apiurl = `${this.baseApiurl}/api/moments`

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>
      (this.apiurl);
  }
  getMoment(id: Number): Observable<Response<Moment>> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData):
    Observable<FormData> {
    return this.http.post<FormData>
      (this.apiurl, formData)
  }
removeMoment(id:Number){
  const url = `${this.apiurl}/${id}`;
  return this.http.delete(url)//
}

updateMoment(id:Number,formData:FormData): Observable<FormData>{
   const url = `${this.apiurl}/${id}`;
   return this.http.put<FormData>(url,formData);

}


}
