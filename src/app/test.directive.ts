import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @Input()
  @HostBinding('style.color')
  public appTest: string;
}
