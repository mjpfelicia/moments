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

  createMoment(formData: FormData):
    Observable<FormData> {
    return this.http.post<FormData>
      (this.apiurl, formData)
  }
}
