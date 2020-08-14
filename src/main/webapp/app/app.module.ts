import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MyContactCardSharedModule } from 'app/shared/shared.module';
import { MyContactCardCoreModule } from 'app/core/core.module';
import { MyContactCardAppRoutingModule } from './app-routing.module';
import { MyContactCardHomeModule } from './home/home.module';
import { MyContactCardEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MyContactCardSharedModule,
    MyContactCardCoreModule,
    MyContactCardHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MyContactCardEntityModule,
    MyContactCardAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MyContactCardAppModule {}
