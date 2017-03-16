import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

//directive for the drop down menu
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  opened = false;

  constructor(private elementRef: ElementRef) { }

@HostListener('click') onClick(){
  this.opened = !this.opened;
}
@HostListener('mouseleave') onLeave(){
  this.opened = false;
}
@HostBinding('class.open') get onOpen(){
  return this.opened
}


}
