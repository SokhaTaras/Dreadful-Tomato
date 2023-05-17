import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MediaContent} from './components/movies/media-content';



export const  routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
       path: 'movies',
       component: MediaContent
      },
      {
        path: 'series',
        component: MediaContent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
