import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleAuthDto } from '../models/dtos/googleAuthDto';
import { User } from '../models/user';
import { JwtTokenService } from './jwt-token.service';
import { LocalStorageService } from './local-storage.service';
declare var gapi: any;
interface Payload {
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.base_url;
  /* @ts-ignore */
  private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);
  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private jwtTokenService: JwtTokenService) {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.GOOGLE_AUTH_CLIENT_ID,
      })
    })

  }
  loginWithGoogle() {
    return this.auth2.signIn();

  }
  persistLoggedUserWithGoogle(googleAuthDto: GoogleAuthDto) {

    return this.http.post(`${this.API}/google-authentication/`, googleAuthDto);
  }
  getGoogleUserDetails() {
    if (this.auth2.isSignedIn.get()) {
      var profile = this.auth2.currentUser.get().getBasicProfile();
      return {
        firstName: profile.getGivenName(),
        lastName: profile.getFamilyName(),
        profileImage: profile.getImageUrl(),
        email: profile.getEmail()
      }
    }
    return null
  }
  signOutWithGoogle() {
    this.auth2.signOut()
      .then(() => {
        /* @ts-ignore */
        this.subject.next(null);
      })
  }
  login(email: string, password: string) {
    return this.http.post(`${this.API}/auth/login`, { email: email, password: password })
  }
  register(user: User) {
    return this.http.post(`${this.API}/auth/register`, user);
  }
  findByEmail(payload: Payload) {
    return this.http.post(`${this.API}/auth/email`, payload);
  }
  findByEmailPayload() {
    const token = this.localStorageService.get("accessToken");
    /* @ts-ignore */
    const email = this.jwtTokenService.getDecodeToken(token).email as string;
    return this.findByEmail({ email: email });

  }
  observable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }


}
