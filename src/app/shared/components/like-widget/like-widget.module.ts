import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionDirectivModule } from '../../directives/action.module';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ActionDirectivModule

  ],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService]
})
export class LikeWidgetModule {}
