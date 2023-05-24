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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsComponent } from './jobs/jobs.component';
import { LivesComponent } from './lives/lives.component';
import { JobCardComponent } from './job-card/job-card.component';
import { NoEmojiPipe } from './pipes/no-emoji.pipe';
import { MaxLenPipe } from './pipes/max-len.pipe';
import { JobDetailsComponent } from './job-details/job-details.component';

import { TagsService } from './service/tags.service';
import { JobsDataService } from './service/jobs-data.service';
import { LivesDataService } from './service/lives-data.service';
import { LifeCardComponent } from './life-card/life-card.component';
import { LifeDetailsComponent } from './life-details/life-details.component';

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
    BackIndexComponent,
    JobsComponent,
    LivesComponent,
    JobCardComponent,
    NoEmojiPipe,
    MaxLenPipe,
    JobDetailsComponent,
    LifeCardComponent,
    LifeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [TagsService, LivesDataService, JobsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
