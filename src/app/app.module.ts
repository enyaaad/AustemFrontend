import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';
import { SaveASComponent } from './pages/save-as/save-as.component';
import { StoragePageComponent } from './pages/storage-page/storage-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {RouterModule, Routes} from "@angular/router";
import { CountfloorsComponent } from './pages/countfloors/countfloors.component';
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import { CalculatePageComponent } from './pages/calculate-page/calculate-page.component';

const appRoutes: Routes = [
  {path: 'constructor', component: ConstructorComponent},
  {path: 'saveas', component: SaveASComponent},
  {path: 'storagepage', component: StoragePageComponent},
  {path: 'countfloors', component: CountfloorsComponent},
  {path: 'mainpage', component: MainPageComponent},
  {path: 'calculate', component: CalculatePageComponent},
  {path: '**', component: MainPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ConstructorComponent,
    SaveASComponent,
    StoragePageComponent,
    CountfloorsComponent,
    CalculatePageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
