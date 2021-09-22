import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/uploadFileService';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
import { Good } from 'src/app/models/good';

import { getGood } from '../../state/bailleurdb.selector';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [trigger('openModal', [
    state('out', style({ transform: 'translateY(1rem),scale(.9)', opacity: 0 })),
    state('in', style({ transform: 'translateY(0),scale(1)', opacity: 1 })),
    transition('false <=> true', animate(300))
  ]),
  trigger('backgroundSwitch', [
    state('out', style({ opacity: 0 })),
    state('in', style({ opacity: 1 })),
    transition('false <=> true', animate(300))
  ])]
})
export class MediaComponent implements OnInit {
  /* @ts-ignore */
  good$: Observable<Good>;
  good:Good = {};
  url: any;
  format: any;
  errorModalShow: string = 'out';
  backgroundSwitch: string = 'out';
  upload: boolean = false;
  videoUrls: string[] = [];
  imageUrls: string[] = [];
  _progress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progress$: Observable<number> = this._progress.asObservable();
  /* @ts-ignore */
  @ViewChild('image', { static: false }) imageCont: ElementRef;
  constructor(private renderer: Renderer2, private router: Router, private uploadService: UploadFileService, private store: Store<bailleurDashboardState>, private zone: NgZone
  ) { }

  ngOnInit(): void {
    
    this.good$ = this.store.select(getGood);
    this.good$.subscribe(good => {
      this.good = good;
      console.log(this.good)
        /* @ts-ignore */
      this.imageUrls = this.good.mediaFiles;
              /* @ts-ignore */
      this.videoUrls = this.good.videoFiles
    })

  }
  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      this.upload = true;
      const type = file.type.indexOf('image') > -1 ? 'image' : (file.type.indexOf('video') > -1 ? 'video' : 'unknown');
      reader.onload = (event) => {
        if (type == 'video') {
          this.addVideoToDom((<FileReader>event.target).result, file);
        } else if (type == 'image') {
          this.addImageToDom((<FileReader>event.target).result, file);
        }
      }
    }
  }
  uploadImage(file: File) {
    this.zone.run(() => {
      this.uploadService.uploadImage(file).subscribe(evt => {
        if (evt.type === HttpEventType.UploadProgress) {
          if (evt.total != undefined) {
            this._progress.next(Math.round(95 * evt.loaded / evt.total));
          }
        }
        else if (evt instanceof HttpResponse) {
          this.upload = false;
          /* @ts-ignore*/
          this.imageUrls.push(evt.body.Location)
          /* @ts-ignore*/
          console.log(evt.body.Location)
          this._progress.next(100);
        }
      }, error => {
        console.log("error")
        this.upload = false;
        this.errorModalShow = 'in';
        this.backgroundSwitch = 'in';
      })
    })
  }

  formSubmit() {
    this.store.dispatch(BailleurdbActions.media({
      mediaFiles: this.imageUrls,
      videoFiles: this.videoUrls
    }))
    
    this.router.navigate(['/dashboard/bailleur/add-good/disponibility'])
  }
  continueOnError() {
    const element = this.imageCont.nativeElement;
    while (element.firstChild) {
      this.renderer.removeChild(element, element.lastChild);
    }
    this.imageUrls = [];
    this.videoUrls = [];
    this.errorModalShow = 'out';
    this.backgroundSwitch = 'out';
  }
  uploadVideo(file: File) {
    this.zone.run(() => {
      this.uploadService.uploadVideo(file).subscribe(evt => {
        console.log("hey hey")
        if (evt.type === HttpEventType.UploadProgress) {
          if (evt.total != undefined) {
            this._progress.next(Math.round(95 * evt.loaded / evt.total));
          }
        }
        else if (evt instanceof HttpResponse) {
          console.log("************************************")
          this.upload = false;
          /* @ts-ignore*/
          this.videoUrls.push(evt.body.Location)
          /* @ts-ignore*/
          console.log(evt.body.Location)
          this._progress.next(100);
        }
      }, error => {
        this.upload = false;
        this.errorModalShow = 'in';
        this.backgroundSwitch = 'in';
      })
    })

  }
  async addVideoToDom(url: any, file: any) {
    let div = this.renderer.createElement('div');
    this.renderer.setAttribute(div, 'class', 'mr-3 relative mt-5');
    let video = this.renderer.createElement('video');
    this.renderer.setAttribute(video, 'class', 'inline-block h-36 w-60	 rounded-md');
    this.renderer.setAttribute(video, 'src', url);
    this.renderer.setAttribute(video, 'controls', '');
    this.renderer.appendChild(div, video);
    let span = this.renderer.createElement('span');
    this.renderer.setAttribute(span, 'class', 'absolute bg-white rounded-full p-2 top-1 right-1 cursor-pointer');
    let svg = this.renderer.createElement('svg', 'svg');
    this.renderer.setAttribute(svg, 'width', "6");
    this.renderer.setAttribute(svg, 'height', "6");
    this.renderer.setAttribute(svg, 'viewBox', "0 0 6 6");
    this.renderer.setAttribute(svg, 'fill', "none");
    this.renderer.setAttribute(svg, 'xmlns', "http://www.w3.org/2000/svg");
    let path = this.renderer.createElement('path', 'svg');
    this.renderer.setAttribute(path, 'd', "M3.66083 3.00127L5.90415 0.757855C5.96585 0.696099 5.9999 0.613709 6 0.525855C6 0.437953 5.96595 0.355465 5.90415 0.293806L5.70756 0.0972697C5.64576 0.0353673 5.56337 0.00146484 5.47541 0.00146484C5.38761 0.00146484 5.30522 0.0353673 5.24341 0.0972697L3.0001 2.34054L0.756683 0.0972697C0.694976 0.0353673 0.612537 0.00146484 0.524634 0.00146484C0.436829 0.00146484 0.35439 0.0353673 0.292683 0.0972697L0.096 0.293806C-0.032 0.421806 -0.032 0.630001 0.096 0.757855L2.33937 3.00127L0.096 5.24459C0.0342439 5.30644 0.000243902 5.38883 0.000243902 5.47668C0.000243902 5.56454 0.0342439 5.64693 0.096 5.70873L0.292634 5.90527C0.354341 5.96712 0.436829 6.00107 0.524585 6.00107C0.612488 6.00107 0.694927 5.96712 0.756634 5.90527L3.00005 3.66195L5.24337 5.90527C5.30517 5.96712 5.38756 6.00107 5.47537 6.00107H5.47546C5.56332 6.00107 5.64571 5.96712 5.70751 5.90527L5.9041 5.70873C5.9658 5.64698 5.99985 5.56454 5.99985 5.47668C5.99985 5.38883 5.9658 5.30644 5.9041 5.24464L3.66083 3.00127Z");
    this.renderer.setAttribute(path, 'fill', "#E53A24");
    this.renderer.appendChild(svg, path);
    this.renderer.appendChild(span, svg);
    this.renderer.appendChild(div, span);
    this.renderer.appendChild(this.imageCont.nativeElement, div);
    span.addEventListener('click', () => {
      // delete video from the dom
      this.renderer.removeChild(this.imageCont.nativeElement, div);
      // delete video from cloud if it exists
      this.deleteVideoFromCloud(file);

    })
    this.uploadVideo(file);

  }
  deleteVideoFromCloud(file: File) {
    console.log(this.imageUrls)
    const name = file.name.split('.')[0];
    this.videoUrls = this.imageUrls.filter(videoUrl => !videoUrl.includes(name))
    console.log(this.imageUrls)

  }
  deleteImageFromCloud(file: any) {
    console.log(this.imageUrls)
    const name = file.name.split('.')[0];
    this.imageUrls = this.imageUrls.filter(imageUrl => !imageUrl.includes(name))
    console.log(this.imageUrls)
  }
  async addImageToDom(url: any, file: any) {
    let div = this.renderer.createElement('div');
    this.renderer.setAttribute(div, 'class', 'mr-3 relative mt-5');
    let img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'class', 'inline-block h-36 w-60	 rounded-md');
    this.renderer.setAttribute(img, 'src', url);
    this.renderer.appendChild(div, img);

    let span = this.renderer.createElement('span');
    this.renderer.setAttribute(span, 'class', 'absolute bg-white rounded-full p-2 top-1 right-1 cursor-pointer');
    let svg = this.renderer.createElement('svg', 'svg');
    this.renderer.setAttribute(svg, 'width', "6");
    this.renderer.setAttribute(svg, 'height', "6");
    this.renderer.setAttribute(svg, 'viewBox', "0 0 6 6");
    this.renderer.setAttribute(svg, 'fill', "none");
    this.renderer.setAttribute(svg, 'xmlns', "http://www.w3.org/2000/svg");
    let path = this.renderer.createElement('path', 'svg');
    this.renderer.setAttribute(path, 'd', "M3.66083 3.00127L5.90415 0.757855C5.96585 0.696099 5.9999 0.613709 6 0.525855C6 0.437953 5.96595 0.355465 5.90415 0.293806L5.70756 0.0972697C5.64576 0.0353673 5.56337 0.00146484 5.47541 0.00146484C5.38761 0.00146484 5.30522 0.0353673 5.24341 0.0972697L3.0001 2.34054L0.756683 0.0972697C0.694976 0.0353673 0.612537 0.00146484 0.524634 0.00146484C0.436829 0.00146484 0.35439 0.0353673 0.292683 0.0972697L0.096 0.293806C-0.032 0.421806 -0.032 0.630001 0.096 0.757855L2.33937 3.00127L0.096 5.24459C0.0342439 5.30644 0.000243902 5.38883 0.000243902 5.47668C0.000243902 5.56454 0.0342439 5.64693 0.096 5.70873L0.292634 5.90527C0.354341 5.96712 0.436829 6.00107 0.524585 6.00107C0.612488 6.00107 0.694927 5.96712 0.756634 5.90527L3.00005 3.66195L5.24337 5.90527C5.30517 5.96712 5.38756 6.00107 5.47537 6.00107H5.47546C5.56332 6.00107 5.64571 5.96712 5.70751 5.90527L5.9041 5.70873C5.9658 5.64698 5.99985 5.56454 5.99985 5.47668C5.99985 5.38883 5.9658 5.30644 5.9041 5.24464L3.66083 3.00127Z");
    this.renderer.setAttribute(path, 'fill', "#E53A24");
    this.renderer.appendChild(svg, path);
    this.renderer.appendChild(span, svg);
    this.renderer.appendChild(div, span);
    this.renderer.appendChild(this.imageCont.nativeElement, div);
    span.addEventListener('click', () => {
      // delete image from the dom
      this.renderer.removeChild(this.imageCont.nativeElement, div);
      // delete image from cloud if it exists
      this.deleteImageFromCloud(file);
    })
    this.uploadImage(file);
  }
}
