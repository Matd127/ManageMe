import User from "./User";

export default interface Functionality {
    id: number,
    description: string,
    priority: string,
    owner: User,
    state: string
}