import { ETask, ITask } from '../../../../projects/lib/src';

export const SAMPLE_TASKS: ITask[] = [
  {
    id: 1,
    title: 'Research',
    description: 'Gather information on project requirements',
    status: ETask.TODO,
  },
  {
    id: 2,
    title: 'Design',
    description: 'Create initial mockups',
    status: ETask.TODO,
  },
  {
    id: 3,
    title: 'Implementation',
    description: 'Start coding the main features',
    status: ETask.IN_PROGRESS,
  },
  {
    id: 4,
    title: 'Testing',
    description: 'Perform unit tests',
    status: ETask.IN_PROGRESS,
  },
  {
    id: 5,
    title: 'Documentation',
    description: 'Write user manual',
    status: ETask.DONE,
  },
];
