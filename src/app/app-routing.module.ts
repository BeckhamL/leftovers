import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { PreferencesComponent } from './main/preferences/preferences.component';
import { RecipesComponent } from './main/recipes/recipes.component';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
