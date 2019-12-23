import { Component, OnInit } from "@angular/core";
import {
  of,
  Observable,
  pipe,
  from,
  concat,
  interval,
  range,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
  asyncScheduler,
  queueScheduler,
  animationFrameScheduler,
  asapScheduler,
  forkJoin,
  combineLatest,
  Subscriber
} from "rxjs";
import {
  first,
  filter,
  map,
  take,
  multicast,
  refCount,
  tap,
  observeOn,
  withLatestFrom
} from "rxjs/operators";
import { async } from "rxjs/internal/scheduler/async";
import { QueueScheduler } from "rxjs/internal/scheduler/QueueScheduler";
import { HttpClient } from "@angular/common/http";
import { NotExpr } from '@angular/compiler';

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  public x: any;
  objData: any;

  constructor() {}
  ngOnInit() {
    //


    var subject = new Subject();

    subject.subscribe({
      next: value => console.log(`1: ${value}`),
      error: err => console.log(err),
      complete: () => console.log("Completed")
    })

    subject.subscribe({
      next: value => console.log(`2: ${value}`)
    })





    // let obs1 = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   subscriber.complete();
    // })
    // obs1.subscribe({
    //   next: (value) => console.log(`Valoarea numarul ${value}`),
    //   error: (err) => console.log(`Error: ${err}`),
    //   complete: () => console.log("Comepleted observable!")
    // })

    // let sub1 = new Subject();
    // const series$ = sub1.asObservable();
    // series$.subscribe((value) => console.log(value))
    // sub1.next(1);
    // sub1.next(2);
    // sub1.next(3);
    // from([1,2,3]).subscribe(data => console.log(data))

    // first()(of(3, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
    // const obs = new Observable(subscriber => {
    //   subscriber.next(1);
    // });
    // obs.subscribe({
    //   next(x) {console.log(x)}
    // });

    // obs.pipe(
    //   let a = () => {
    //     console.log("da");
    //   }
    // )
    // const source$ = from([1, 2, 3, 4]);
    // console.log(source$);

    // const subscription$ = source$
    // .pipe(
    //   filter(value => value % 2 === 0),
    //   map(value => value * value)
    // )
    // subscription$.subscribe(data => {
    //   console.log(data);
    // });

    // const timer = interval(1000).pipe(take(5));
    // const sequence = range(1, 10);
    // const result = concat(timer, sequence);
    // result.subscribe(x => console.log(x));

    // const numbers$ = range(1, 10);
    // numbers$
    // .pipe(
    //   filter(value => value % 2 === 0),
    //   map(v => v * v)
    // )
    // .subscribe(
    //   {
    //     next(x) { console.log(x); },
    //     error(err) { console.error('something wrong occurred: ' + err); },
    //     complete() { console.log('done'); }
    //   }
    // );

    // const observable = interval(1000);
    // const subscription = observable.subscribe(x => console.log(x));
    // subscription.unsubscribe();

    // const observable1 = interval(1000);
    // const observable2 = interval(1000);

    // const subscription = observable1.subscribe(x => console.log('firstObs: ' + x));
    // const childSubscription = observable2.subscribe(x => console.log('secondObs: ' + x));

    // subscription.add(childSubscription)

    // setTimeout(() => {
    //   // Unsubscribes BOTH subscription and childSubscription
    //   subscription.unsubscribe();
    // }, 5000);

    // const subject = new Subject<number>();
    // subject.subscribe({
    //   next: v => console.log(`observerA: ${v}`)
    // });
    // subject.subscribe({
    //   next: v => console.log(`observerB: ${v}`)
    // });

    // subject.next(1);
    // subject.next(2);

    // let subject = new Subject();

    // subject.subscribe({
    //   next: function(value) {
    //     console.log(value);
    //   },
    //   error: function(error) {
    //     console.log(error);
    //   },
    //   complete: function() {
    //     console.log('Complete');
    //   }
    // });

    // subject.subscribe({
    //   next: function(value) {
    //     console.log(value + " 2nd");
    //   }
    // });

    // subject.next('A new data piece');
    // subject.complete();

    // const subject = new BehaviorSubject(0); // 0 is the initial value

    // subject.subscribe({
    //   next: v => console.log(`observerA: ${v}`)
    // });

    // subject.next(1);
    // subject.next(2);

    // subject.subscribe({
    //   next: v => console.log(`observerB: ${v}`)
    // });

    // subject.next(3);
    // subject.next(4);

    // var clickEmitted = new BehaviorSubject('Not clicked!');
    // var button = document.querySelector('button');
    // var div = document.querySelector('div');

    // button.addEventListener('click', () => {
    //   if(div.textContent === "Not clicked!")
    //     clickEmitted.next('Clicked!');

    //   else {
    //     clickEmitted.next('Not clicked!');
    //   }
    // });

    // clickEmitted.subscribe((value) => {
    //   div.textContent = value;
    // });

    // const source = interval(500);
    // const subject = new Subject();
    // const refCounted = source.pipe(multicast(subject), refCount());
    // let subscription1, subscription2;

    // // This calls `connect()`, because
    // // it is the first subscriber to `refCounted`
    // console.log('observerA subscribed');
    // subscription1 = refCounted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });

    // setTimeout(() => {
    //   console.log('observerB subscribed');
    //   subscription2 = refCounted.subscribe({
    //     next: (v) => console.log(`observerB: ${v}`)
    //   });
    // }, 600);

    // setTimeout(() => {
    //   console.log('observerA unsubscribed');
    //   subscription1.unsubscribe();
    // }, 1200);

    // // This is when the shared Observable execution will stop, because
    // // `refCounted` would have no more subscribers after this
    // setTimeout(() => {
    //   console.log('observerB unsubscribed');
    //   subscription2.unsubscribe();
    // }, 2000);

    //     const source = from([1, 2, 3]);
    // const subject = new Subject();
    // const multicasted = source.pipe(multicast(subject));

    // // These are, under the hood, `subject.subscribe({...})`:
    // multicasted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // multicasted.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // // This is, under the hood, `source.subscribe(subject)`:
    // multicasted.connect();

    // const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });

    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);

    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // subject.next(5);

    // subject.subscribe({
    //   next: (v) => console.log(`observerC: ${v}`)
    // });

    // subject.next(6);
    // const subject = new ReplaySubject(100, 500 /* windowTime */);
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });

    // let i = 1;
    // setInterval(() => subject.next(i++), 200);

    // setTimeout(() => {
    //   subject.subscribe({
    //     next: (v) => console.log(`observerB: ${v}`)
    //   });
    // }, 1000);

    // const subject = new AsyncSubject();

    // subject.subscribe({
    //   next: v => console.log(`observerA: ${v}`)
    // });

    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);

    // subject.subscribe({
    //   next: v => console.log(`observerB: ${v}`)
    // });

    // subject.next(5);
    // subject.complete();

    //Async Scheduler

    // const saludar = () => console.log('Hola Mundo');
    // const saludar2 = nombre => console.log(`Hola ${ nombre }`);

    // // asyncScheduler.schedule(saludar, 2000);
    // // asyncScheduler.schedule( saludar2, 2000, 'Fernando');
    // const subs = asyncScheduler.schedule(function(state){
    //   console.log('state ', state);

    //   this.schedule( state + 1, 1000)

    // }, 2000, 0)

    // asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

    //   range(0, 5)
    //     .pipe(observeOn(queueScheduler))
    //     .subscribe(console.log);

    //   of(42)
    //     .pipe(observeOn(queueScheduler))
    //     .subscribe(console.log);

    //   interval(1000, asyncScheduler)
    //     .subscribe(console.log);

    //   interval(1000, animationFrameScheduler)
    //     .subscribe(console.log);

    // const delay = 0;
    // const obs$ = of(42);

    // obs$.pipe(observeOn(animationFrameScheduler, delay))
    //   .subscribe((v) => console.log('5 observable animationFrame', v));

    // obs$.pipe(observeOn(asyncScheduler, delay))
    //   .subscribe((v) => console.log('4 observable async', v));

    // obs$.pipe(observeOn(asapScheduler, delay))
    //   .subscribe((v) => console.log('3 observable asap', v));

    // obs$.pipe(observeOn(queueScheduler, delay))
    //   .subscribe((v) => console.log('1 observable queue', v));

    // obs$
    //   .subscribe(v => console.log('2 observable default', v));

    // const delay = 0;
    // const state = 42;
    // const work = (state) => {
    //   console.log('initialState: ', state);
    // }

    // const subscription = asyncScheduler
    //   .schedule(work, delay, state);

    //   subscription.unsubscribe();

    // const appleStream = new Observable(appleObserver => {
    //   appleObserver.next('Apple 1');
    //   appleObserver.next('Apple 2');
    //   appleObserver.complete();
    // })
    // const sub = appleStream.subscribe(
    //    apple => console.log(`Apple was emitted ${apple}`),
    //    err => console.log(`Error occured: ${err}`),
    //    () => console.log(`No more apples, go home`)
    // );
    // sub.unsubscribe();
  }
}
