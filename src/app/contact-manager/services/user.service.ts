import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Subscription} from "rxjs/Subscription";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

    private dataStore: { users: User[]; }

    constructor(private  httpClient: HttpClient) {
        this.dataStore = {users: []};
        this._users = new BehaviorSubject<User[]>([]);
    }

    private _users: BehaviorSubject<User[]>;

    get users(): Observable<User[]> {
        return this._users.asObservable();

    }

    loadall() {
        let subscription: Subscription = this.httpClient.get<User[]>('https://angular-material-api.azurewebsites.net/users').subscribe((data: User[]) => {
                this.dataStore.users = data;

                this._users.next([...this.dataStore.users])
            }
            , error => {
            }
        );
    }

    getById(id: number): User {
        let user = this.dataStore.users.find(i => i.id === id);
        console.log(user);
        return user;
    }

    addUser(user: User): Observable<User> {
        this.dataStore.users.push(user);
        user.id = this.dataStore.users.length + 1;
        this._users.next([...this.dataStore.users])
        return Observable.of(user);
    }
}
