import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeComponent} from './recipe/recipe.component';
import {HomeComponent} from './home/home.component';
import {PlaceComponent} from './place/place.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'recipe', component: RecipeComponent},
  {path: 'place', component: PlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
