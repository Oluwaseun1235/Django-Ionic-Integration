import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//  import { Storage } from '@ionic/storage'; // no longer used; removed

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { LoginPage } from '../pages/login/login' // no longer used; removed
import { LogoutPage } from '../pages/logout/logout'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    // private storage: Storage // no longer used; removed
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: "Feed", component: StatusComponent},
      { title: 'Base', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Logout', component: LogoutPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // this.storage.get('authToken').then((val) => {
      //   console.log('Your auth token value is', val);
      //   if (!val) {
      //     this.rootPage = LoginPage
      //   }
      // });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
