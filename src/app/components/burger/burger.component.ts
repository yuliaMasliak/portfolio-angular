import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {
  isModal: boolean = false;
  constructor(private router: Router) {}
  toProjects() {
    this.router.navigate(['/main/projects']);
  }
  toHome() {
    this.router.navigate(['/main/about']);
  }
  toggleContactForm() {
    this.isModal = !this.isModal;
  }
}
