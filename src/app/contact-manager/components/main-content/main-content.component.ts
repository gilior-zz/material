import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../../services/user.service";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

    user: User;
    private id: number;

    constructor(private  activatedRoute: ActivatedRoute
        , private  userService: UserService) {
        this.activatedRoute.paramMap
            .subscribe((params: ParamMap) => {
                this.id = +params.get('id') || 1;
                this.user = null;
                console.log(this.id);
                this.user = this.userService.getById(this.id);
            });
    }

    ngOnInit() {
        this.userService.users.subscribe(users => {
            this.user = users.find(i => i.id === this.id)
        })

    }

}
