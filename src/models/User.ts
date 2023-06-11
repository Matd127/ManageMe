export default interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    name: string,
    surname: string,
    question: string,
    answer: string
    role: 'admin' | 'devops' | 'developer';
}