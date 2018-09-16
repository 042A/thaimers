import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ModalService } from './modal/modal.service';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes.toString().padStart(2, '0') + ':' +
        (value - minutes * 60).toString().padStart(2, '0');
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(+100%)'}),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'}))
      ])
    ])
  ]
})


export class StopwatchComponent implements OnInit {
  timer$;
  timer2;
  timer3;
  spawnsPre: any = [2, 35];
  spawnsPre2: any = [18, 52];
  spawns: { id: number, time: number, color: string, text: string }[]  =
  [ { "id": 1, "time": 10, "color": "active", "text": "PowerUp Rune" }, { "id": 2, "time": 40, "color": "active", "text": "PowerUp Rune" }, { "id": 3, "time": 70, "color": "active", "text": "PowerUp Rune" }, { "id": 4, "time": 100, "color": "active", "text": "PowerUp Rune" }, { "id": 5, "time": 130, "color": "active", "text": "PowerUp Rune" }, { "id": 6, "time": 160, "color": "active", "text": "PowerUp Rune" }, { "id": 7, "time": 190, "color": "active", "text": "PowerUp Rune" }, { "id": 8, "time": 220, "color": "active", "text": "PowerUp Rune" }, { "id": 9, "time": 250, "color": "active", "text": "PowerUp Rune" }, { "id": 10, "time": 280, "color": "active", "text": "PowerUp Rune" }, { "id": 11, "time": 310, "color": "active", "text": "PowerUp Rune" }, { "id": 12, "time": 340, "color": "active", "text": "PowerUp Rune" }, { "id": 13, "time": 370, "color": "active", "text": "PowerUp Rune" }, { "id": 14, "time": 400, "color": "active", "text": "PowerUp Rune" }, { "id": 15, "time": 430, "color": "active", "text": "PowerUp Rune" }, { "id": 16, "time": 460, "color": "active", "text": "PowerUp Rune" }, { "id": 17, "time": 490, "color": "active", "text": "PowerUp Rune" }, { "id": 18, "time": 520, "color": "active", "text": "PowerUp Rune" }, { "id": 19, "time": 550, "color": "active", "text": "PowerUp Rune" }, { "id": 20, "time": 580, "color": "active", "text": "PowerUp Rune" }, { "id": 21, "time": 610, "color": "active", "text": "PowerUp Rune" }, { "id": 22, "time": 640, "color": "active", "text": "PowerUp Rune" }, { "id": 23, "time": 670, "color": "active", "text": "PowerUp Rune" }, { "id": 24, "time": 700, "color": "active", "text": "PowerUp Rune" }, { "id": 25, "time": 730, "color": "active", "text": "PowerUp Rune" }, { "id": 26, "time": 760, "color": "active", "text": "PowerUp Rune" }, { "id": 27, "time": 790, "color": "active", "text": "PowerUp Rune" }, { "id": 28, "time": 820, "color": "active", "text": "PowerUp Rune" }, { "id": 29, "time": 850, "color": "active", "text": "PowerUp Rune" }, { "id": 30, "time": 880, "color": "active", "text": "PowerUp Rune" }, { "id": 31, "time": 910, "color": "active", "text": "PowerUp Rune" }, { "id": 32, "time": 940, "color": "active", "text": "PowerUp Rune" }, { "id": 33, "time": 970, "color": "active", "text": "PowerUp Rune" }, { "id": 34, "time": 1000, "color": "active", "text": "PowerUp Rune" }, { "id": 35, "time": 1030, "color": "active", "text": "PowerUp Rune" }, { "id": 36, "time": 1060, "color": "active", "text": "PowerUp Rune" }, { "id": 37, "time": 1090, "color": "active", "text": "PowerUp Rune" }, { "id": 38, "time": 1120, "color": "active", "text": "PowerUp Rune" }, { "id": 39, "time": 1150, "color": "active", "text": "PowerUp Rune" }, { "id": 40, "time": 1180, "color": "active", "text": "PowerUp Rune" }, { "id": 1, "time": 25, "color": "danger", "text": "Bounty Rune" }, { "id": 2, "time": 85, "color": "danger", "text": "Bounty Rune" }, { "id": 3, "time": 145, "color": "danger", "text": "Bounty Rune" }, { "id": 4, "time": 205, "color": "danger", "text": "Bounty Rune" }, { "id": 5, "time": 265, "color": "danger", "text": "Bounty Rune" }, { "id": 6, "time": 325, "color": "danger", "text": "Bounty Rune" }, { "id": 7, "time": 385, "color": "danger", "text": "Bounty Rune" }, { "id": 8, "time": 445, "color": "danger", "text": "Bounty Rune" }, { "id": 9, "time": 505, "color": "danger", "text": "Bounty Rune" }, { "id": 10, "time": 565, "color": "danger", "text": "Bounty Rune" }, { "id": 11, "time": 625, "color": "danger", "text": "Bounty Rune" }, { "id": 12, "time": 685, "color": "danger", "text": "Bounty Rune" }, { "id": 13, "time": 745, "color": "danger", "text": "Bounty Rune" }, { "id": 14, "time": 805, "color": "danger", "text": "Bounty Rune" }, { "id": 15, "time": 865, "color": "danger", "text": "Bounty Rune" }, { "id": 16, "time": 925, "color": "danger", "text": "Bounty Rune" }, { "id": 17, "time": 985, "color": "danger", "text": "Bounty Rune" }, { "id": 18, "time": 1045, "color": "danger", "text": "Bounty Rune" }, { "id": 19, "time": 1105, "color": "danger", "text": "Bounty Rune" }, { "id": 20, "time": 1165, "color": "danger", "text": "Bounty Rune" } ];
  spawned = false;
  hinttime = 10000;
  spawntimer;
  running = false;
  newTodo: Todo = new Todo();
  eventName;

  constructor(private todoDataService: TodoDataService, private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
    console.log ('open modal ' + id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  startTimer() {
    this.running = true;
    console.log ('Startar timer');
    const source1 = timer(0, 1000);

    const subscribe1 = source1.subscribe(val => {
      this.timer$ = val;
      this.timer3 = 100 - val;
      this.checkConditions(val);
    });
  }

  checkConditions(val) {
    if (this.spawns.some(e => e.time === val)) {
      const spawnsStore =  this.spawns.find(x => x.time === val);
      console.log (spawnsStore);
      this.runeSpawnData(spawnsStore);
    } else {
      return;
    }
  }

  runeSpawnData(spawnProperties): void {
    this.eventName = spawnProperties.text;
    this.displayRuneSpawn();
    const source2 = timer(0, 100);
    const subscribe2 = source2.subscribe(val => {
      this.timer2 = 1 / this.hinttime * 10000 * val;
      this.spawntimer = this.hinttime * 0.001 - val * .1;
      });
    setTimeout(function() {
      this.destroyRuneSpawn();
      subscribe2.unsubscribe();
      this.addHistoryEntry(spawnProperties.text, spawnProperties.color, this.timer$);
      this.timer2 = 0;
    }.bind(this), this.hinttime);
  }

  displayRuneSpawn(): void {
    this.spawned = true;
    console.log('Power up rune spawned: spawned: ' + this.spawned);
   }

  destroyRuneSpawn(): void {
      this.spawned = false;
      console.log('Power up rune spawned: spawned: ' + this.spawned);
  }

  addCustom() {
    this.addHistoryEntry('Custom event', 'danger', this.timer$);
  }

  addHistoryEntry(title, color, timestamp) {
    this.newTodo = {
      id: 1,
      title: title,
      color: color,
      timestamp: timestamp,
      complete: false
    };
    this.todoDataService.addHistoryEntry(this.newTodo);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
