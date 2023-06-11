import Project from "./Project";
import User from "./User";

export default interface Functionality {
    id: number,
    name: string,
    description: string,
    priority: 'Low' | 'Normal' | 'High',
    project: Project,
    owner: User,
    state: 'Todo' | 'Doing' | 'Done'
}