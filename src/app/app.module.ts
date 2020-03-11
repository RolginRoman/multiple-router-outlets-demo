import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ChatComponent } from './chat.component';
import { OtherChatComponent } from './otherchat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Mini1Component } from './mini1.component';
import { Mini2Component } from './mini2.component';

const ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet: 'sidebar' },
  { path: 'otherchat', component: OtherChatComponent, outlet: 'sidebar' },
  { path: 'footer1', component: Mini1Component, outlet: 'footer' },
  { path: 'footer2', component: Mini2Component, outlet: 'footer' }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HomeComponent, ChatComponent, NavbarComponent, OtherChatComponent, Mini1Component, Mini2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
