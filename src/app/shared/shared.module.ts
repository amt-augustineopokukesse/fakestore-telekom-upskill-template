import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './widgets/custom-input/custom-input.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from './widgets/custom-button/custom-button.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [
    CustomInputComponent,
    CustomButtonComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ProgressSpinnerModule
  ],
  exports: [
    CustomInputComponent,
    CustomButtonComponent,
    ProgressSpinnerModule
  ]
})
export class SharedModule { }
