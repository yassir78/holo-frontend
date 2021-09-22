import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Good } from 'src/app/models/good';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
import { getGood } from '../../state/bailleurdb.selector';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [trigger("fade", [
    state("void", style({ opacity: 0 })),
    transition("void <=> *", [animate("0.5s ease-in-out")])
  ])]
})
export class PostComponent implements OnInit {
  /* @ts-ignore */
  good$: Observable<Good>;
  counter = 0;
  good: Good = {};
  /* @ts-ignore */
  imageUrls: string[];
  /* @ts-ignore */
  medias: { type: string, url: string }[] = [];
  constructor(private store: Store<bailleurDashboardState>, private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.good$ = this.store.select(getGood);

    this.good$.subscribe(good => {
      this.good = good;
      /* @ts-ignore */
      if (this.good.mediaFiles?.length > 0) {
        /* @ts-ignore */
        this.good.mediaFiles?.forEach(image => {
          this.medias.push({ type: "image", url: image });
        })
      }
      /* @ts-ignore */
      if (this.good.videoFiles?.length > 0) {
        /* @ts-ignore */
        this.good.videoFiles?.forEach(video => {
          this.medias.push({ type: "video", url: video });
        })
      }
      console.log(this.medias)
    })
  }
  nextSlide() {
    if (this.counter < this.medias.length - 1) {
      this.counter += 1;
    } else {
      this.counter = 0;
    }
  }
  previousSlide() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    } else {
      this.counter = this.medias.length - 1;
    }
  }
  addGood() {
    this.store.dispatch(BailleurdbActions.addGood({ good: this.good }))
    this.router.navigate(['/'])
  }
}
