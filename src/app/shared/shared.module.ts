import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenSizeSmallPipe } from './screen-size-small.pipe';

@NgModule({
  declarations: [ScreenSizeSmallPipe],
  imports: [CommonModule],
  exports: [ScreenSizeSmallPipe]
})
export class SharedModule {}
