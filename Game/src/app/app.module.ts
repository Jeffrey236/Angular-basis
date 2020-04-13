import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { GameService } from './game.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent},
 /* { path: "**", component: Page not found},*/
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
