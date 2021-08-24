import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bailleur-register',
  templateUrl: './bailleur-register.component.html',
  styleUrls: ['./bailleur-register.component.scss']
})
export class BailleurRegisterComponent implements OnInit {

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
