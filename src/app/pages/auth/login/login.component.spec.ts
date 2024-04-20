import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MasterService } from 'src/app/core/service/master/master.service';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockMasterService: jasmine.SpyObj<MasterService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    mockMasterService = jasmine.createSpyObj('MasterService', ['post']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, MatCardModule, SharedModule,
        BrowserAnimationsModule
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: MasterService, useValue: mockMasterService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the login form with empty fields', () => {
    const usernameControl = component.loginForm.get('username');
    const passwordControl = component.loginForm.get('password');
    if (usernameControl && passwordControl) {
      expect(usernameControl).toBeTruthy();
      expect(passwordControl).toBeTruthy();
      expect(usernameControl.value).toEqual('');
      expect(passwordControl.value).toEqual('');
      expect(usernameControl.valid).toBeFalsy();
      expect(passwordControl.valid).toBeFalsy();
    } else {
      fail('usernameControl or passwordControl is null');
    }
  });
  
  it('should validate username and password as required', () => {
    const usernameControl = component.loginForm.get('username');
    const passwordControl = component.loginForm.get('password');
    if(usernameControl && passwordControl){
      usernameControl.setValue('');
      passwordControl.setValue('');
      expect(usernameControl.hasError('required')).toBeTruthy();
      expect(passwordControl.hasError('required')).toBeTruthy();
    } else {
      fail('usernameControl or passwordControl is null');
    }
  });

  it('should call authService.login() when form is valid', () => {
    mockAuthService.login.and.returnValue(of({ token: 'fake-token' }));
    component.loginForm.setValue({ username: 'user', password: 'pass' });
    component.onSubmit();
    expect(mockAuthService.login).toHaveBeenCalledWith({ username: 'user', password: 'pass' });
  });

  it('should navigate to products page on successful login', () => {
    mockAuthService.login.and.returnValue(of({ token: 'fake-token' }));
    component.onSubmit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['products']);
  });
  
});
