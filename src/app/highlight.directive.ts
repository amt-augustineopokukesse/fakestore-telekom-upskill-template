import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private el = inject(ElementRef);
  public constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
