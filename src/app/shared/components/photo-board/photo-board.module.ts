import { PhotoBoardService } from './services/photo-board.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoFrameModule } from './../photo-frame/photo-frame.module';
@NgModule({
  declarations:[PhotoBoardComponent],
  imports:[
    CommonModule,
    PhotoFrameModule
  ],
  exports:[PhotoBoardComponent],
  providers:[PhotoBoardService]

}) export class PhotoBoardModule {}
