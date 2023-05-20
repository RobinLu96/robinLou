import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RobinCollectionComponent } from './robin-collection/robin-collection.component';
import { DynamicTypingComponent } from './dynamic-typing/dynamic-typing.component';
import { ExperienceComponent } from './experience/experience.component';
import { RobinIconComponent } from './robin-icon/robin-icon.component';
import { IntroSkillInterestComponent } from './intro-skill-interest/intro-skill-interest.component';
import { BackIconComponent } from './ui/back-icon/back-icon.component';
import { BackIndexComponent } from './ui/back-index/back-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RobinCollectionComponent,
    DynamicTypingComponent,
    ExperienceComponent,
    RobinIconComponent,
    IntroSkillInterestComponent,
    BackIconComponent,
    BackIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
