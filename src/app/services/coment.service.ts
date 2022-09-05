import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../Comment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  private baseApiurl = environment.baseApiurl
  private apiUrl = `${this.baseApiurl}/api/moment/comments`


  constructor(
    private http: HttpClient,
  ) { }

  createCommnt(data: Comment): Observable<Response<Comment>> {
    return this.http.post<Response<Comment>>(this.apiUrl, data);

  }
}
