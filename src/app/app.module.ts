import { ComponentesModule } from './componentes/componentes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosState } from 'src/state/usuarios.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    NgxsModule.forRoot([UsuariosState]),
    ReactiveFormsModule,
    ComponentesModule,
    HttpClientModule,
   
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HttpClientModule,],
  bootstrap: [AppComponent],
})
export class AppModule {}
