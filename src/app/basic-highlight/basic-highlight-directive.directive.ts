import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  // constructor(private elementRef: ElementRef) {}
  // ngOnInit() {
  //   this.elementRef.nativeElement.style.backgroundColor = 'green';
  // }
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor() {}
  ngOnInit() {}
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'white';
  }
}
