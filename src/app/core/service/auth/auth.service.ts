import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { LoginResponse } from '../../models/interfaces/authInterface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public constructor(private master: MasterService) { }

  public login(data: { username: string; password: string }) {
    return this.master.post<LoginResponse>('auth/login', data);
  }
}
