import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialModule} from "./shared/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NewContactDlgComponent} from "./contact-manager/components/new-contact-dlg/new-contact-dlg.component";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
            {path: 'contactManager', loadChildren: './contact-manager/contact-manager.module#ContactManagerModule'},
            {path: '**', redirectTo: 'contactManager'}
        ]),
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule
    ],
    providers: [],
    entryComponents: [NewContactDlgComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
