import { TestBed, async } from '@angular/core/testing';
import { StopwatchComponent } from './app.component';
describe('StopwatchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StopwatchComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(StopwatchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'StopWatch'`, async(() => {
    const fixture = TestBed.createComponent(StopwatchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('StopWatch');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(StopwatchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to StopWatch!');
  }));
});
