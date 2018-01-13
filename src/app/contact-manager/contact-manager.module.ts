import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MaterialModule} from "../shared/material.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    ContactManagerRoutingModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule
  ],
  declarations: [AppComponent, ToolbarComponent, MainContentComponent, SideNavComponent]
})
export class ContactManagerModule { }
