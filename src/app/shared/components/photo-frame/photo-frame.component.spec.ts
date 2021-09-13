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
  it(`(D)Should display number of likes when (@Input likes) is incremented`,() =>{
    fixture.detectChanges();
    component.likes++;
    expect(component.likes).toBe(1);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1')
  });
  it('(D)Should update aria-label when (@Input likes) i incremented' ,() =>{
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked')
  });
  it('(D) should have area-label with 0 (@Input likes)',()=>{
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked')
  });

  it('(D) should display image with src and description when bound to properties',()=>{

    const src="https://picsum.photos/200/300";
    component.src = src;
    const description="Some description";
    component.description = description
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src)
  });

})
