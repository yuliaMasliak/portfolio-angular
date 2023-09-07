import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
interface Skill {
  img: string;
  name: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      img: '../../../assets/js.png',
      name: 'JavaScript'
    },
    {
      img: '../../../assets/ts.png',
      name: 'TypeScript'
    },
    {
      img: '../../../assets/ang.png',
      name: 'Angular'
    },
    {
      img: '../../../assets/rxjs.png',
      name: 'RxJs'
    },
    {
      img: '../../../assets/commercetool.png',
      name: 'Commercetools'
    },
    {
      img: '../../../assets/node.png',
      name: 'NodeJs'
    },
    {
      img: '../../../assets/nest.png',
      name: 'NestJs'
    },
    {
      img: '../../../assets/ws.png',
      name: 'WebSocket'
    },
    {
      img: '../../../assets/jest.png',
      name: 'Jest'
    },
    {
      img: '../../../assets/wp.png',
      name: 'Webpack'
    },
    {
      img: '../../../assets/rest.png',
      name: 'REST API'
    },
    {
      img: '../../../assets/git.png',
      name: 'Git'
    },
    {
      img: '../../../assets/bs.png',
      name: 'Bootstrap'
    },
    {
      img: '../../../assets/figma.png',
      name: 'Figma'
    }
  ];
  slideConfig = {
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true
  };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
}

