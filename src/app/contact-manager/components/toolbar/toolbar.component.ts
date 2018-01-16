import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    @Output() toggleSideNav: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

}
