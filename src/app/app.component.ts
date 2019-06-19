import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private user: SocialUser;
  public authorized: boolean = false;

  constructor(private socialAuthService: AuthService) { }

  public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    //Método pra logar com o email e senha da google
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        if (userData != null) {
          this.authorized = true;
          this.user = userData;
        }
      }
    );
  }
  //Método pra deslogar
  public signOut() {
    this.socialAuthService.signOut();
    this.authorized = false;
  }

}
