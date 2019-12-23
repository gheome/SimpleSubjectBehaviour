import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private nameSource = new BehaviorSubject('Default');
  name$ = this.nameSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.nameSource.next(message);
  }
}
