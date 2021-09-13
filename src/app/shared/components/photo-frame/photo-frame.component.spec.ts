import { PhotoFrameModule } from './photo-frame.module';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    }).compileComponents();
    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  })
  it('should create compontent', () => {
    expect(component).toBeTruthy();
  });
  it(`${PhotoFrameComponent.prototype.like.name}
    should trigger (@Outpu liked) once when called
    multiple times within debounce time`, fakeAsync(() => {
    /*fakeASync controla o tempo de execucao de todo bloco it,
    cada tick do relogio corresponde a um debaounce.*/
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => { times++ });
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));
  it(`Should display number of likes when (@Input likes) is incremented`,() =>{
    fixture.detectChanges();
    component.likes++;
    expect(component.likes).toBe(1);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1')
  });
})
