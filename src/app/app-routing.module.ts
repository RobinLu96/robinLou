import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RobinCollectionComponent } from './robin-collection/robin-collection.component';
import { IntroSkillInterestComponent } from './intro-skill-interest/intro-skill-interest.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
    pathMatch: 'full',
    data: {animation: 'landing-page'}
  },
  {path:'contact',component:ContactComponent},
  {path:'collection', component:RobinCollectionComponent},
  {path:'skills&interest', component: IntroSkillInterestComponent},
  {path:'experience', component: ExperienceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
