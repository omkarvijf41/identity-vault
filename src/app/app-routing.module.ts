import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'register-ssn-eid',
    pathMatch: 'full'
  },
  {
    path: 'register-ssn-eid',
    loadChildren: () =>
      import('./register-ssn-eid.page/register-ssn-eid.module').then(
        m => m.RegisterSsnEidPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
