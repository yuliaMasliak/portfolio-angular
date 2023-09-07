import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'screenSizeSmall'
})
export class ScreenSizeSmallPipe implements PipeTransform {
  transform(screenWidth: number): boolean {
    return screenWidth <= 640;
  }
}
