import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar} from "@angular/material";
import {NewContactDlgComponent} from "../new-contact-dlg/new-contact-dlg.component";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    @Output() toggleSideNav: EventEmitter<void> = new EventEmitter<void>();

    constructor(public dialog: MatDialog
        , private snackBar: MatSnackBar
        , private  router: Router
        , private  activatedRoute: ActivatedRoute) {
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(NewContactDlgComponent, {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                let snack = this.openSnackBar(result, 'navigate');
                snack.onAction().subscribe(() => {
// Relative navigation back to the crises
                    this.router.navigate(['./',result.id], { relativeTo: this.activatedRoute });
                })
            }
            console.log(`Dialog result`, result); // Pizza!
        });
    }

    openSnackBar(user: User, act: string): MatSnackBarRef<SimpleSnackBar> {
        return this.snackBar.open(`${user.name} available now`, act, {
            duration: 5000,
        });
    }


    ngOnInit() {
    }

    openDlg() {

    }

}
