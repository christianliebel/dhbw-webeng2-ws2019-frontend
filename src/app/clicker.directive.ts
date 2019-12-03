import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClicker]'
})
export class ClickerDirective {
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    console.log('clicked!', event);
  }
}
