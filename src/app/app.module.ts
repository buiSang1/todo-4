import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
  NbThemeModule,
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainComponent } from './components/main/main.component';
@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule,
    NbThemeModule.forRoot(),
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
