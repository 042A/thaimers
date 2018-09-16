import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { timer, Observable } from 'rxjs';
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

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform  {
  transform(value) {
    return value.slice().reverse();
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
  spawnsPre: any = [2, 16, 24];
  spawnsPre2: any = [9, 32, 40];
  spawned = false;
  hinttime = 5000;
  spawntimer;
  running = false;

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo2(title, color, timestamp) {
    this.newTodo = {
      id: 1,
      title: title,
      color: color,
      timestamp: timestamp,
      complete: false
    };

    this.todoDataService.addTodo(this.newTodo);
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
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


  ngOnInit(): void {
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
      this.addTodo2('rune', 'active', this.timer$);
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
      this.timer2 = 0;
      this.addTodo2('vafam', 'info', '13:37');
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

}
