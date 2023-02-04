import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HitChanceComponent} from './component/hit-chance/hit-chance.component';
import {HomeComponent} from './component/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'hit-chance', component: HitChanceComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
