import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StopwatchComponent, MinuteSecondsPipe } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbActionsModule } from '@nebular/theme';
import { NbCardModule, NbProgressBarModule, NbAlertModule, NbButtonModule, NbBadgeModule} from '@nebular/theme';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { TimeSettingsComponent } from './settings.component';


const appRoutes: Routes = [
  { path: '', component: StopwatchComponent },
];

@NgModule({
  declarations: [
    StopwatchComponent,
    MinuteSecondsPipe,
    ModalComponent,
    TimeSettingsComponent
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
    NbButtonModule,
    NbBadgeModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [NbSidebarService, MinuteSecondsPipe, ModalService],
  bootstrap: [StopwatchComponent]
})
export class AppModule { }
