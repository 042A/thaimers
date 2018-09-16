import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StopwatchComponent, MinuteSecondsPipe, ReversePipe } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbActionsModule } from '@nebular/theme';
import { NbCardModule, NbProgressBarModule, NbAlertModule, NbButtonModule} from '@nebular/theme';

const appRoutes: Routes = [
  { path: '', component: StopwatchComponent },
];

@NgModule({
  declarations: [
    StopwatchComponent,
    MinuteSecondsPipe,
    ReversePipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbCardModule,
    NbProgressBarModule,
    NbAlertModule,
    NbButtonModule
  ],
  providers: [NbSidebarService, MinuteSecondsPipe, ReversePipe],
  bootstrap: [StopwatchComponent]
})
export class AppModule { }
