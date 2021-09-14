import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAction]'
})
export class ActionDirective {
  /**
   * Event generic of DOM
   */
  @Output() appAction : EventEmitter<Event> = new EventEmitter();


  constructor() { }
  @HostListener('click', ['$event'])
  handleClick(event :Event) { this.appAction.emit(event)}

  @HostListener('keyup', ['$event'])

  handleKeyup (event : KeyboardEvent){
    //if(event.code == 'Enter') this.appAction.emit(event)}
    this.appAction.emit(event)}
}
