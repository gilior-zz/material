import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app',
    template: `
        <side-nav></side-nav>
    `,
    styles: []
})
export class AppComponent implements OnInit {

    constructor(private httpClient:HttpClient, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        let safeResourceUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg')
        this.matIconRegistry.addSvgIconSet(safeResourceUrl);
    }

    ngOnInit() {
    }

}
