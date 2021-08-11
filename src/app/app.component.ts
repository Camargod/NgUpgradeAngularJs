import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularJsAndAngular';

  constructor(private upgrade:UpgradeModule) {
  }

  ngOnInit(){
    this.upgrade.bootstrap(document.body, ['wingsUiAppModule'])
  }
}
