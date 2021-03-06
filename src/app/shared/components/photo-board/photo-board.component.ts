import { Photo } from './interfaces/photo';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnChanges {

  @Input() photos : Photo[];
  rows : any[][]=[];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos){
      this.rows = this.groupColuns(changes.photos.currentValue)
    }
  }
  groupColuns(photos: Photo[]): any[][] {
    let newRows = [];
    const step = 4;
    for (let index = 0; index < photos.length; index+step) {
      newRows.push(photos.slice(index, index+step))
    return newRows;
    }
  }


}
