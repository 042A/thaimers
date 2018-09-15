import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StopwatchComponent, MinuteSecondsPipe } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbActionsModule, NbCardModule, NbProgressBarModule, NbAlertModule } from '@nebular/theme';

const appRoutes: Routes = [
  { path: '', component: StopwatchComponent },
];

@NgModule({
  declarations: [
    StopwatchComponent,
    MinuteSecondsPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbCardModule,
    NbProgressBarModule,
    NbAlertModule,
    FormsModule
  ],
  providers: [NbSidebarService, MinuteSecondsPipe],
  bootstrap: [StopwatchComponent]
})
export class AppModule { }
