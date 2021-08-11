import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static'
import { UrlHandlingStrategy, UrlTree } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Angular2Component } from './angular2/Angular2-Component/Angular2-Component.component';

declare var angular: any;

class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) { 
    return url.toString().startsWith("/angular") || url.toString() == "/";
  }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

// angular.module('WingsUiAppModule')
//   .directive(
//     'ng2Demo',
//     downgradeComponent({component: AppComponent})
//   );

@NgModule({
  declarations: [
    AppComponent,
    Angular2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy }       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
