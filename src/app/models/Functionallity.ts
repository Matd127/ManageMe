import User from "./User";

export default interface Functionallity {
    id: number,
    description: string,
    priority: string,
    owner: User,
    state: string
}