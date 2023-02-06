import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterProgressionComponent} from './component/character-progression/character-progression.component';
import {HitChanceComponent} from './component/hit-chance/hit-chance.component';
import {HomeComponent} from './component/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'hit-chance', component: HitChanceComponent},
    {path: 'character-progression', component: CharacterProgressionComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
