import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  @Input () public label = '';
  @Input () public required = false;
  @Input () public type = '';
  @Input () public placeholder = '';

}
