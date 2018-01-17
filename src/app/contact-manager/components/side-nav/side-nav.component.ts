import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {SMALL_WIDTH_BREAKPOINT} from "../../../const";
import {UserService} from "../../services/user.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {User} from "../../models/user";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MatSidenav} from "@angular/material";

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @ViewChild(MatSidenav) matSidenav: MatSidenav
    mediaQueryList: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`)
    users$: Observable<User[]>;
    private id: number;

    constructor(ngZone: NgZone, private userService: UserService, private  activatedRoute: ActivatedRoute, public  router: Router) {
        this.mediaQueryList.addListener(mql =>
            ngZone.run(() => this.mediaQueryList = mql)
        )

        this.activatedRoute.paramMap
            .switchMap((params: ParamMap) => {
                this.id = +params.get('id');
                console.log(this.id);
                return null;
            });
        this.activatedRoute.paramMap.map((params: ParamMap) => {
            this.id = +params.get('id');
            console.log(this.id);
            return null;
        })

    }

    get opened(): boolean {
        return !this.mediaQueryList.matches;
    }

    get mode(): string {
        return this.mediaQueryList.matches ? 'over' : 'side';
    }

    ngOnInit() {
        this.users$ = this.userService.users;
        this.userService.loadall();
        // this.users$.subscribe(i => {
        //     if (i.length > 0)
        //         setTimeout(() => {
        //             this.router.navigate(['contactManager/users', i[0].id])
        //         }, 500)
        //
        // });

        this.router.events.subscribe(() => {
            if (this.mediaQueryList.matches)
                this.matSidenav.close()
        })

    }

}
