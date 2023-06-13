import Functionallity from './Functionality';
import User from './User';

export interface Task {
  id: number;
  name: string,
  description: string;
  priority: 'Low' | 'Normal' | 'High',
  functionality: Functionallity;
  predictedTime: number; // or date
  state: 'Todo' | 'Doing' | 'Done'
  createDate: Date;
  startDate?: Date;
  finishDate?: Date;
  responsibleUser: User[] // or User;
}
