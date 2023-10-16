import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/landing-page/landing-page.module").then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: "landing-page",
    loadChildren: () =>
      import("./pages/landing-page/landing-page.module").then(
        (m) => m.LandingPageModule
      ),
  },

  //{ path: 'maintenance', component: MaintenanceComponent },
  //{ path: '404', component: NotFoundComponent },
  //{ path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
