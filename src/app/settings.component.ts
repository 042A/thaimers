import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})

export class TimeSettingsComponent {

  times = [];
  start = 0;
  interval = 5 * 60;
  stop = 60 * 60;

  constructor(private modalService: ModalService) { }

  makeTimeTable(): void {
    console.log ('startet');
    const length = this.times.push(this.start);
    let n = this.start;
    do {
    n++;
    this.start = this.start + this.interval;
    this.times.push(this.start);
    console.log (this.times);
    } while (this.start < (60 * 60));
  }

  closeModal(id: string) {
    this.modalService.close(id);
}

}
