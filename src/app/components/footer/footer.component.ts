import { Component, HostListener } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faShareNodes
} from '@fortawesome/free-solid-svg-icons';
import { Platform } from '@angular/cdk/platform';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          fontSize: '20px'
        })
      ),
      state(
        'closed',
        style({
          fontSize: '35px'
        })
      ),
      transition('open => closed', [animate('0.4s')]),
      transition('closed => open', [animate('0.4s')])
    ])
  ]
})
export class FooterComponent {
  isOpen = true;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faTelegram = faTelegram;
  faShareNodes = faShareNodes;

  constructor(private platform: Platform) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.isOpen = false;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isOpen = true;
  }

  shareProfile() {
    if (this.platform.isBrowser) {
      if (navigator.share) {
        navigator
          .share({
            title: 'Shared Content',
            text: 'Check out this content',
            url: 'https://cv-masliak-yulia-front-end.netlify.app/'
          })
          .then(() => console.log('Shared successfully'))
          .catch((error) => console.error('Sharing failed', error));
      } else {
        console.warn('Web Share API not supported in this browser.');
      }
    }
  }
}
