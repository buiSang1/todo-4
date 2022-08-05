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
  NbIconModule,
  NbSelectModule,
} from '@nebular/theme';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainComponent } from './components/main/main.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { QuaTangComponent } from './components/qua-tang/qua-tang.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [AppComponent, MainComponent, QuaTangComponent, UsersComponent, DialogComponent,],
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
    NbEvaIconsModule,
    NbIconModule,
    GraphQLModule,
    HttpClientModule,
    NbSelectModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
