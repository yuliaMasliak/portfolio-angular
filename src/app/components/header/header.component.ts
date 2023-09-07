import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { ScreenService } from 'src/app/shared/get-screen-width.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSmallScreen: boolean = false;
  constructor(private router: Router, private screenService: ScreenService) {}
  faCircleDown = faCircleDown;
  isModal = false;
  isBurgerMenu: boolean = false;
  burgerState: 'open' | 'closed' = 'closed';
  downloadCV() {
    const link = document.createElement('a');
    link.href = '../../../assets/CV-Y_Masliak-Web-Developer.pdf';
    link.download = 'CV-Masliak-Yulia.pdf';
    link.target = '_blank';
    link.click();
  }
  toProjects() {
    this.router.navigate(['/projects']);
  }
  toHome() {
    this.router.navigate(['/about']);
  }
  toggleContactForm() {
    this.isModal = !this.isModal;
  }
  ngOnInit(): void {
    this.isSmallScreen = this.screenService.getScreenWidth() <= 640;
    this.burgerState = this.isBurgerMenu ? 'open' : 'closed';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSmallScreen = this.screenService.getScreenWidth() <= 640;
  }
  toggleBurger() {
    this.isBurgerMenu = !this.isBurgerMenu;
  }
}

