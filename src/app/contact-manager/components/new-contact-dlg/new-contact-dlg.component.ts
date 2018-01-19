import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {User} from "../../models/user";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'new-contact-dlg',
    templateUrl: './new-contact-dlg.component.html',
    styleUrls: ['./new-contact-dlg.component.scss']
})
export class NewContactDlgComponent implements OnInit {

    user: User;

    avatars = [
        'svg-1',
        'svg-2',
        'svg-3',
        'svg-4'
    ];


    constructor(public dialogRef: MatDialogRef<NewContactDlgComponent>
                ,private  userService:UserService
    ) {
    }

    closeDialog() {
        this.dialogRef.close('Pizza!');
    }

    ngOnInit() {
        this.user = new User();
        this.user.name='name'
        this.user.avatar='svg-1'
        this.user.bio='bio'
        this.user.birthDate=new Date();
    }

    save() {
        this.userService.addUser(this.user).subscribe(user=>{

            this.dialogRef.close(this.user)
        })

    }


}
