import { ActionDirectivModule } from './action.module';
/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectivModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance

  });

  it(`(D) (@Output appAction) should emit event with payload
    when Enter key is pressed `,()=>{
      fixture.detectChanges();
      const divEl : HTMLElement= fixture.nativeElement
        .querySelector('.dummy-component');
      const event = new KeyboardEvent('keyup',{key:'Enter'})
      divEl.dispatchEvent(event);
      expect(component.hasEvent()).toBe(true)
    });
});


@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {
  private event: Event = null
   public actionHandler(event: Event): void {
    this.event = event;
  }
  hasEvent(): boolean {
    return !this.event;
  }
}
