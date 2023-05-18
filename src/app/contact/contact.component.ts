import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactProfile: any;
  email: any;
  profile: any;
  whatsapp: any;

  constructor(private router: Router) {

    this.contactProfile = {
      iconUrl:[
      ],
    //Robin's profile, including Facebook, Twitter, Instagram and LinkedIn
     profile: [
       {
         name: 'Facebook',
         url: 'https://www.facebook.com/robinlu.lulu/',
         iconUrl: './assets/icon/facebook.svg'
       },
       {
         name: 'Twitter',
         url: 'https://twitter.com/robinlou/',
         iconUrl: '../../assets/icon/twitter.svg'
       },
       {
         name: 'Instagram',
         url: 'https://www.instagram.com/robinlou_',
         iconUrl: '../../assets/icon/instagram.svg'
       },
       {
         name: 'LinkedIn',
         url: 'https://www.linkedin.com/in/robin-lou-50252a102',
         iconUrl: './assets/icon/linkedin.svg'
       }
     ],
     //Robin's work, including Github, Leetcode and Stackoverflow
     work: [
       {
         name: 'GitHub',
         url: 'https://github.com/RobinLu96',
         iconUrl: './assets/icon/github.svg'
       },
       {
         name: 'Hackerrank',
         url: 'https://leetcode.com/RobinLou96',
         iconUrl: './assets/icon/leetcode.svg'
       },
       {
         name: 'Stackoverflow',
         url: 'https://stackoverflow.com/story/robinlou96',
         iconUrl: './assets/icon/stackoverflow.svg'
       },
     ]
   };
    //Send an email to Robin or Call Robin
    this.email = {
     name: 'Email',
     url: 'mailto:x89lu@uwaterloo.ca',
     iconUrl: './assets/icon/email.svg'
   };
 
    this.whatsapp = {
     name: 'whatsapp',
     url: 'tel: 519-722-8069',
     iconUrl: './assets/icon/whatsapp.svg'
   };

   }

  ngOnInit(): void {
  }
  //BacktoHomepage
  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
