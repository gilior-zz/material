import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {MainContentComponent} from "./components/main-content/main-content.component";

const routes: Routes = [
    {
        path: 'users', component: AppComponent, children:
        [
            {path: ':id', component: MainContentComponent},
        ]
    },
    {path: '', pathMatch: 'full', redirectTo: 'users'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactManagerRoutingModule {
}
