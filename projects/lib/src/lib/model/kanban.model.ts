import { ETask } from '../enum/kanban.enum';

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: ETask;
}
