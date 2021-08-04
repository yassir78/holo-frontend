import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isActive:boolean = false;
  activeRoute:string = '';
  constructor(private router: Router,private route: ActivatedRoute) { 
    this.activeRoute = this.router.url;
    console.log(this.router.url)  }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent) => {
      if(routerEvent instanceof NavigationEnd) {
        this.activeRoute = routerEvent.url;
          console.log(routerEvent.url);
      }
  });
  }

}
