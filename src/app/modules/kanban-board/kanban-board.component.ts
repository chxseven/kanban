import { Component, OnInit } from '@angular/core';
import { SAMPLE_TASKS } from './kanban.data';
import { ETask, ITask } from '../../../../projects/lib/src';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  DragDropModule,
} from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
})
export class KanbanBoardComponent implements OnInit {
  todo: ITask[] = [];
  inProgress: ITask[] = [];
  done: ITask[] = [];
  eTask = ETask;

  ngOnInit(): void {
    this.initTaskData();
  }

  initTaskData(): void {
    this.todo = SAMPLE_TASKS.filter((task) => task.status === ETask.TODO);
    this.inProgress = SAMPLE_TASKS.filter(
      (task) => task.status === ETask.IN_PROGRESS
    );
    this.done = SAMPLE_TASKS.filter((task) => task.status === ETask.DONE);
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    event.container.data[event.currentIndex].status = event.container
      .id as ETask;
  }

  getStageID(stagesID: string[]): string[] {
    return stagesID;
  }
}
