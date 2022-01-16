import { ProductosComponent } from './componentes/productos/productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,

    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'prefix',
      },


      { path: 'productos', component: ProductosComponent },

     

    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
