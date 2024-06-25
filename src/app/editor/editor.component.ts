import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements OnInit {
  currentState: string = '';

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.onStateChangeListener();
  }

  onStateChangeListener(): void {
    this.stateService.state$.subscribe((state) => {
      this.currentState = state;
    });
  }

  changeState(event: any): void {
    const newState = event.target?.value;
    this.stateService.setState(newState);
  }

  undo(): void {
    this.stateService.undo();
  }

  redo(): void {
    this.stateService.redo();
  }
}
