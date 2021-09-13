import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit {

  @Output() liked: EventEmitter<void>= new EventEmitter();
  @Input() src="";
  @Input() likes = 0;
  @Input() description=''
  private debounceSubject : Subject<void>= new Subject
  constructor() { }

  ngOnInit() {
    this.debounceSubject
    .asObservable()
    .pipe(debounceTime(500))
    .subscribe(() => this.liked.emit());
  }

  like(): void{
    this.debounceSubject.next();
  }
  ngOnDestroy(): void {
    this.debounceSubject.unsubscribe();
  }
}
