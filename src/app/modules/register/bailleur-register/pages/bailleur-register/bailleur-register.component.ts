import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bailleur } from 'src/app/models/bailleur';
import { getUser } from '../../state/bailleur.selector';
import { bailleurRegisterState } from '../../state/bailleur.state';

@Component({
  selector: 'app-bailleur-register',
  templateUrl: './bailleur-register.component.html',
  styleUrls: ['./bailleur-register.component.scss']
})
export class BailleurRegisterComponent implements OnInit {

  isActive: boolean = false;
  activeRoute: string = '';
  /* @ts-ignore */
  user$: Observable<Bailleur>;
  user:Bailleur={};
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<bailleurRegisterState>) {
    this.activeRoute = this.router.url;
    console.log(this.router.url)
  }

  ngOnInit(): void {
    this.user$ = this.store.select(getUser);
    this.user$.subscribe(user=>{
      this.user = user;
    })
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.activeRoute = routerEvent.url;
        console.log(routerEvent.url);
      }
    });
  }
}
