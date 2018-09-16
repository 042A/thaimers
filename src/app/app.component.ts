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
  [ { "id": 1, "time": 0, "color": "danger", "text": "Bounty Rune" }, { "id": 2, "time": 300, "color": "danger", "text": "Bounty Rune" }, { "id": 3, "time": 600, "color": "danger", "text": "Bounty Rune" }, { "id": 4, "time": 900, "color": "danger", "text": "Bounty Rune" }, { "id": 5, "time": 1200, "color": "danger", "text": "Bounty Rune" }, { "id": 6, "time": 1500, "color": "danger", "text": "Bounty Rune" }, { "id": 7, "time": 1800, "color": "danger", "text": "Bounty Rune" }, { "id": 8, "time": 2100, "color": "danger", "text": "Bounty Rune" }, { "id": 9, "time": 2400, "color": "danger", "text": "Bounty Rune" }, { "id": 10, "time": 2700, "color": "danger", "text": "Bounty Rune" }, { "id": 11, "time": 3000, "color": "danger", "text": "Bounty Rune" }, { "id": 12, "time": 3300, "color": "danger", "text": "Bounty Rune" } ];
  spawned = false;
  hinttime = 15000;
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
      this.timer$ = (-60) + val;
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
