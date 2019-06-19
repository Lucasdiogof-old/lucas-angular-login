import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";
import { AppComponent } from './app.component';


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [ //Tentativa de implementar o login com o facebook
       // {
       //   id: FacebookLoginProvider.PROVIDER_ID,
      //    provider: new FacebookLoginProvider("282577308941815")
      //  },
      
        //Implementação do login com a conta da Google
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("892772198314-hgi31plfe4c1tf12789l76n534q3296l.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SocialLoginModule
  ],
  providers: [
	{
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
