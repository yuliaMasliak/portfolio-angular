import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  getScreenWidth(): number {
    return window.innerWidth;
  }
}
