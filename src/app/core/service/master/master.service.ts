import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseUrl: string = environment.base_url;

  public constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  public post(url: string, body: unknown) {
    return this.http.post(this.baseUrl + url, body);
  }

  public put(url: string, body: unknown) {
    return this.http.put(this.baseUrl + url, body);
  }

  public delete(url: string) {
    return this.http.delete(this.baseUrl + url);
  }
}
