import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public constructor(private master: MasterService) { }
}
