import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private undoStack: any[] = [];
  private redoStack: any[] = [];
  private currentState: string = '';
  public stateSubject = new BehaviorSubject<string>('');
  state$ = this.stateSubject.asObservable();

  constructor() {}

  setState(newState: any) {
    if (this.currentState !== '') {
      this.undoStack.push(this.currentState);
    }
    this.currentState = newState;
    this.redoStack = [];
    this.stateSubject.next(this.currentState);
  }

  undo() {
    if (this.undoStack.length > 0) {
      this.redoStack.push(this.currentState);
      this.currentState = this.undoStack.pop();
      this.stateSubject.next(this.currentState);
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      this.undoStack.push(this.currentState);
      this.currentState = this.redoStack.pop();
      this.stateSubject.next(this.currentState);
    }
  }
}
