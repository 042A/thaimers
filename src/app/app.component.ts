import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

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
  styleUrls: ['./app.component.css']
})

export class StopwatchComponent implements OnInit {
  timer$;
  timer2;
  timer3;
  spawnsPre: any = [2, 12, 22];
  spawned = false;
  hinttime = 5000;
  spawntimer;


    startTimer() {
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


}
