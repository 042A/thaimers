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
  [ { "id": 1, "time": 5, "color": "danger", "text": "Power-up rune" }, { "id": 2, "time": 35, "color": "danger", "text": "Power-up rune" }, { "id": 3, "time": 65, "color": "danger", "text": "Power-up rune" }, { "id": 4, "time": 95, "color": "danger", "text": "Power-up rune" }, { "id": 5, "time": 125, "color": "danger", "text": "Power-up rune" }, { "id": 6, "time": 155, "color": "danger", "text": "Power-up rune" }, { "id": 7, "time": 185, "color": "danger", "text": "Power-up rune" }, { "id": 8, "time": 215, "color": "danger", "text": "Power-up rune" }, { "id": 9, "time": 245, "color": "danger", "text": "Power-up rune" }, { "id": 10, "time": 275, "color": "danger", "text": "Power-up rune" }, { "id": 11, "time": 305, "color": "danger", "text": "Power-up rune" }, { "id": 12, "time": 335, "color": "danger", "text": "Power-up rune" }, { "id": 13, "time": 365, "color": "danger", "text": "Power-up rune" }, { "id": 14, "time": 395, "color": "danger", "text": "Power-up rune" }, { "id": 15, "time": 425, "color": "danger", "text": "Power-up rune" }, { "id": 16, "time": 455, "color": "danger", "text": "Power-up rune" }, { "id": 17, "time": 485, "color": "danger", "text": "Power-up rune" }, { "id": 18, "time": 515, "color": "danger", "text": "Power-up rune" }, { "id": 19, "time": 545, "color": "danger", "text": "Power-up rune" }, { "id": 20, "time": 575, "color": "danger", "text": "Power-up rune" }, { "id": 21, "time": 605, "color": "danger", "text": "Power-up rune" }, { "id": 22, "time": 635, "color": "danger", "text": "Power-up rune" }, { "id": 23, "time": 665, "color": "danger", "text": "Power-up rune" }, { "id": 24, "time": 695, "color": "danger", "text": "Power-up rune" }, { "id": 25, "time": 725, "color": "danger", "text": "Power-up rune" }, { "id": 26, "time": 755, "color": "danger", "text": "Power-up rune" }, { "id": 27, "time": 785, "color": "danger", "text": "Power-up rune" }, { "id": 28, "time": 815, "color": "danger", "text": "Power-up rune" }, { "id": 29, "time": 845, "color": "danger", "text": "Power-up rune" }, { "id": 30, "time": 875, "color": "danger", "text": "Power-up rune" }, { "id": 31, "time": 905, "color": "danger", "text": "Power-up rune" }, { "id": 32, "time": 935, "color": "danger", "text": "Power-up rune" }, { "id": 33, "time": 965, "color": "danger", "text": "Power-up rune" }, { "id": 34, "time": 995, "color": "danger", "text": "Power-up rune" }, { "id": 35, "time": 1025, "color": "danger", "text": "Power-up rune" }, { "id": 36, "time": 1055, "color": "danger", "text": "Power-up rune" }, { "id": 37, "time": 1085, "color": "danger", "text": "Power-up rune" }, { "id": 38, "time": 1115, "color": "danger", "text": "Power-up rune" }, { "id": 39, "time": 1145, "color": "danger", "text": "Power-up rune" }, { "id": 40, "time": 1175, "color": "danger", "text": "Power-up rune" }, { "id": 1, "time": 20, "color": "warning", "text": "Bounty rune" }, { "id": 2, "time": 80, "color": "warning", "text": "Bounty rune" }, { "id": 3, "time": 140, "color": "warning", "text": "Bounty rune" }, { "id": 4, "time": 200, "color": "warning", "text": "Bounty rune" }, { "id": 5, "time": 260, "color": "warning", "text": "Bounty rune" }, { "id": 6, "time": 320, "color": "warning", "text": "Bounty rune" }, { "id": 7, "time": 380, "color": "warning", "text": "Bounty rune" }, { "id": 8, "time": 440, "color": "warning", "text": "Bounty rune" }, { "id": 9, "time": 500, "color": "warning", "text": "Bounty rune" }, { "id": 10, "time": 560, "color": "warning", "text": "Bounty rune" }, { "id": 11, "time": 620, "color": "warning", "text": "Bounty rune" }, { "id": 12, "time": 680, "color": "warning", "text": "Bounty rune" }, { "id": 13, "time": 740, "color": "warning", "text": "Bounty rune" }, { "id": 14, "time": 800, "color": "warning", "text": "Bounty rune" }, { "id": 15, "time": 860, "color": "warning", "text": "Bounty rune" }, { "id": 16, "time": 920, "color": "warning", "text": "Bounty rune" }, { "id": 17, "time": 980, "color": "warning", "text": "Bounty rune" }, { "id": 18, "time": 1040, "color": "warning", "text": "Bounty rune" }, { "id": 19, "time": 1100, "color": "warning", "text": "Bounty rune" }, { "id": 20, "time": 1160, "color": "warning", "text": "Bounty rune" } ];
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
