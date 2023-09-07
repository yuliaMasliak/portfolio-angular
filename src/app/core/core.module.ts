import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SloganComponent } from './slogan/slogan.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes: Routes = [
  {
    path: 'about',
    component: MainComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '**',
    component: MainComponent
  }
];
@NgModule({
  declarations: [
    MainComponent,
    SkillsComponent,
    ProjectsComponent,
    SloganComponent
  ],
  imports: [CommonModule, SlickCarouselModule, RouterModule.forChild(routes)]
})
export class CoreModule {}

