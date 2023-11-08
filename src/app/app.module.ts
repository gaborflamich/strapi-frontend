import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { JobsComponent } from './components/jobs/jobs.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HeaderComponent,
    SidebarComponent,
    JobsComponent,
    FilterPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
