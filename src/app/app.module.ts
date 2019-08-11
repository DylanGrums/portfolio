import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';  
import { environment } from '../environments/environment';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProjectsComponent } from './components/layout/projects/projects.component';
import { AboutComponent } from './components/layout/about/about.component';
import { TitleComponent } from './components/layout/about/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectsComponent,
    AboutComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
