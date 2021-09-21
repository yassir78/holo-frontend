import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Good } from 'src/app/models/good';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
import { getGood } from '../../state/bailleurdb.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
   /* @ts-ignore */
 good$: Observable<Good>;
good:Good = {};
imageUrl:string = '../../../../assets/images/bien1.png';
  constructor(private store: Store<bailleurDashboardState>, private router:Router) { }
 
  ngOnInit(): void {
    this.good$ = this.store.select(getGood);
    this.good$.subscribe(good => {
      this.good = good;
      console.log(this.good)
        /* @ts-ignore */
      if(this.good.mediaFiles[0]){
              /* @ts-ignore */
             this.imageUrl = this.good?.mediaFiles[0];
      }
    })
  }
   
  addGood(){
    this.store.dispatch(BailleurdbActions.addGood({ good: this.good }))
    this.router.navigate(['/'])
  }
}
