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
  spawned = false;
  hinttime = 15000;
  spawntimer;
  running = false;
  newTodo: Todo = new Todo();

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
    if ( this.spawnsPre.includes(val) ) {
      this.runeSpawn();
    }
    if ( this.spawnsPre2.includes(val) ) {
      this.runeSpawn2();
    } else {
      return;
    }
  }

  runeSpawn(): void {
    this.displayRuneSpawn();
    const source2 = timer(0, 100);
    const subscribe2 = source2.subscribe(val => {
      this.timer2 = 1 / this.hinttime * 10000 * val;
      this.spawntimer = this.hinttime * 0.001 - val * .1;
      });
    setTimeout(function() {
      this.destroyRuneSpawn();
      subscribe2.unsubscribe();
      this.addHistoryEntry('Powerup Rune Spawned!', 'active', this.timer$);
      this.timer2 = 0;
    }.bind(this), this.hinttime);
  }

  runeSpawn2(): void {
    this.displayRuneSpawn();
    const source2 = timer(0, 100);
    const subscribe2 = source2.subscribe(val => {
      this.timer2 = 1 / this.hinttime * 10000 * val;
      this.spawntimer = this.hinttime * 0.001 - val * .1;
      });
    setTimeout(function() {
      this.destroyRuneSpawn();
      subscribe2.unsubscribe();
      this.addHistoryEntry('Bounty Rune Spawned!', 'info', this.timer$);
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
