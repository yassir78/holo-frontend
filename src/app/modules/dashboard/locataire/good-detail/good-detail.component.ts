import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Good } from 'src/app/models/good';
import { getSelectedGood } from '../state/locatairedb.selector';
import { locataireDashboardState } from '../state/locatairedb.state';

@Component({
  selector: ' good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.scss'],
  animations: [trigger("fade", [
    state("void", style({ opacity: 0 })),
    transition("void <=> *", [animate("0.5s ease-in-out")])
  ])]
})
export class GoodDetailComponent implements OnInit {
  /* @ts-ignore */
  good$: Observable<Good>;
  /* @ts-ignore */
  good: Good;
  medias: { type: string, url: string }[] = [];
  counter = 0;

  constructor(private store: Store<locataireDashboardState>) {
    
   }

  ngOnInit(): void {
    this.good$ = this.store.select(getSelectedGood);
    this.good$.subscribe((good: Good) => {
      this.good = good;
      /* @ts-ignore */
      if (this.good.mediaFiles?.length > 0) {
        /* @ts-ignore */
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
    });
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

}
