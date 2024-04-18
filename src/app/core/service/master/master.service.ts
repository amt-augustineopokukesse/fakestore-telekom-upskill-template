import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseUrl = 'https://fakestoreapi.com/';


  private constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + url);
  }

  public post<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, body);
  }

  public put(url: string, body: unknown) {
    return this.http.put(this.baseUrl + url, body);
  }

  public delete(url: string) {
    return this.http.delete(this.baseUrl + url);
  }
}
