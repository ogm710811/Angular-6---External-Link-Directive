import { Directive, HostBinding, Input, Attribute } from '@angular/core';

@Directive({
  selector: 'a:not([routerLink])'
})
export class ExternalLinkDirective {
  @HostBinding('rel')
  @Input('rel')
  rel = 'noopener';

  @HostBinding('target')
  @Input()
  target = '_blank';
}
