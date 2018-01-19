import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MaterialModule} from "../shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDlgComponent } from './components/new-contact-dlg/new-contact-dlg.component';
import {Router} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ContactManagerRoutingModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule,

      HttpClientModule
  ],
  declarations: [AppComponent, ToolbarComponent, MainContentComponent, SideNavComponent, NotesComponent, NewContactDlgComponent],
    providers:[UserService]
})
export class ContactManagerModule {

}
