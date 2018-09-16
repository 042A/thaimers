import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class TimeSettingsComponent {
  eventName = '';
  startTime: number;
  intervalTime: number;
  inputColor = '';

  createdObject: { id: number, time: number, color: string, text: string }[] = [];


  constructor(private modalService: ModalService) { }

  makeTimeTable(): void {
    console.log ('Generating timetable based on: ' + this.eventName + this.startTime + this.intervalTime + this.inputColor);
    let id = 0;
    let intStart = Number(this.startTime);
    const intInterval = Number(this.intervalTime);
    do {
    id++;
    const entryData = {id: id, time: intStart, color: this.inputColor, text: this.eventName};
    this.createdObject.push(entryData);
    console.log (this.createdObject);
    intStart = intStart + intInterval;
    } while (intStart < (60 * 60));
    document.getElementById('objectarray').innerHTML = JSON.stringify(this.createdObject, null, 4);
  }

  resetTimeTable() {
    this.createdObject = [];
  }

  closeModal(id: string) {
    this.modalService.close(id);
}

}
