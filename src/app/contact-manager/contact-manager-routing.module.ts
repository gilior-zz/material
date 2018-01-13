import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {MainContentComponent} from "./components/main-content/main-content.component";

const routes: Routes = [
    {
        path: 'app', component: AppComponent, children: [
        {path: '', component: MainContentComponent},
    ]
    },
    {path: '', redirectTo: 'app'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactManagerRoutingModule {
}
