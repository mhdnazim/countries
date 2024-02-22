import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'single/:area',component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
