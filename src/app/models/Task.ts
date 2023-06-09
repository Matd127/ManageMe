import Functionallity from "./Functionallity";
import User from "./User";

export interface Task {
    id: number,
    description: string,
    priority: string,
    functionallity: Functionallity,
    predictedTime: number, // or date?
    state: string,
    createDate: Date,
    startDate? : Date,
    finishDate?: Date
    responsibleUser: User[]
}