import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {ButtonsComponent} from './buttons/buttons.component';
import {MaterialModule} from "../shared/material.module";
import {FlexboxComponent} from './flexbox/flexbox.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: [
        CommonModule,
        DemoRoutingModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule {
}
